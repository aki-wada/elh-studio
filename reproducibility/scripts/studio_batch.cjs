#!/usr/bin/env node
// Drive ELH Studio's Worker from Node: DICOM folder -> manual center points -> segmentation -> ZIP.
// Usage: node tools/studio_batch.cjs --dicom <dir> --landmarks <osirix_landmarks.csv> --out <dir> --name <case> [--studio <studio_paper>]
//        [--mode ppi_pei|ppi_mrc|given] [--k <0.010-0.100>] [--hydrops <series description>] [--flip true]
// cochlea_apex rows in the landmarks CSV are applied when the Studio supports the apex action (0.9.0-dev or later); an older Studio skips them with a warning.
// Input modes (ELH Studio 1.2.0-dev or later): --mode ppi_pei (default: PPI, PEI and MRC as suggested by the scan) |
//   ppi_mrc [--k 0.04] (HYDROPS2 = PPI - k x MRC from the suggested PPI and MRC; k omitted = the Studio's 0.04) |
//   given --hydrops <series description> [--flip true] (one signed HYDROPS-type series, chosen by its Series Description:
//   the exact description, ignoring case, else the one series whose description contains it; MRC as suggested).
const fs=require('node:fs'),path=require('node:path');
function invert4(m){
 const a=m.map((r,i)=>[...r,...[0,1,2,3].map(j=>i===j?1:0)]);
 for(let c=0;c<4;c++){let p=c;for(let r=c+1;r<4;r++)if(Math.abs(a[r][c])>Math.abs(a[p][c]))p=r;[a[c],a[p]]=[a[p],a[c]];
  const d=a[c][c];if(Math.abs(d)<1e-12)throw Error('singular affine');for(let j=0;j<8;j++)a[c][j]/=d;
  for(let r=0;r<4;r++)if(r!==c){const f=a[r][c];for(let j=0;j<8;j++)a[r][j]-=f*a[c][j];}}
 return a.map(r=>r.slice(4));
}
const mul4=(m,v)=>m.map(r=>r.reduce((s,x,i)=>s+x*v[i],0));
function lpsToVoxelFrac(affine,lps){const ras=[-lps[0],-lps[1],lps[2],1];const v=mul4(invert4(affine),ras);return v.slice(0,3).map(x=>Math.round(x*100)/100);}
function lpsToVoxel(affine,lps){const ras=[-lps[0],-lps[1],lps[2],1];const v=mul4(invert4(affine),ras);return v.slice(0,3).map(x=>Math.round(x));}
function selectStudy(catalog,mode='ppi_pei'){
 const studies=catalog.studies||[];if(studies.length!==1)throw Error(`検査が 2 つ以上、または 0 件です（${studies.length}）。1 検査だけのフォルダを指定してください。`);
 if(mode==='ppi_pei'&&!studies[0].complete)throw Error('PPI・PEI・MRC が揃っていません。');return studies[0]; // B and C: loadPayload checks their series
}
const MODES=['ppi_pei','ppi_mrc','given'];
// --hydrops: the series whose description equals the text (ignoring case and surrounding spaces), else the only one containing it
function seriesByDescription(study,textArg){
 const t=String(textArg??'').trim().toUpperCase();if(!t)throw Error('--hydrops に HYDROPS 型画像の系列の説明（Series Description）を指定してください。');
 const list=study.series||[],desc=s=>String(s.description??'').trim().toUpperCase();
 let hit=list.filter(s=>desc(s)===t);if(!hit.length)hit=list.filter(s=>desc(s).includes(t));
 if(hit.length!==1)throw Error(`--hydrops「${textArg}」に合う系列が ${hit.length} 件です。1 件に決まる説明を指定してください。`);
 return hit[0].id;
}
// the Worker's load payload for the mode; mode A (the default) is the scan's suggestion as before
function loadPayload(study,opt={}){
 const mode=opt.mode||'ppi_pei';if(!MODES.includes(mode))throw Error(`--mode は ${MODES.join(' / ')} のいずれかです。`);
 const s=study.suggested||{},base={title:study.title,automatic:false};
 if(mode==='ppi_pei')return {roles:s,...base};
 if(!s.mrc)throw Error('MRC の系列が決まりません（候補が 0 件または 2 件以上）。');
 if(mode==='ppi_mrc'){
  if(!s.ppi)throw Error('PPI の系列が決まりません（候補が 0 件または 2 件以上）。');
  const p={roles:{ppi:s.ppi,mrc:s.mrc},...base,mode};if(opt.k!==undefined)p.k=Number(opt.k);return p;
 }
 return {roles:{hydrops_input:seriesByDescription(study,opt.hydrops),mrc:s.mrc},...base,mode,flip:opt.flip==='true'};
}
function parseLandmarks(text){
 const label={'R,cochlea':1,'R,vestibule':2,'L,cochlea':3,'L,vestibule':4},out={};
 for(const line of text.split(/\r?\n/)){if(!line||line.startsWith('#'))continue;const f=line.split(',');const k=label[`${f[1]},${f[2]}`];if(!k)continue;out[k]=[+f[4],+f[5],+f[6]];}
 if(Object.keys(out).length!==4)throw Error('中心点は 4 つ（左右の蝸牛・前庭）必要です。');return out;
}
function parseApex(text){
 const out={};
 for(const line of text.split(/\r?\n/)){if(!line||line.startsWith('#'))continue;const f=line.split(',');if(f[2]===undefined||f[2].trim().toLowerCase()!=='cochlea_apex'||(f[1]!=='R'&&f[1]!=='L'))continue;const p=[f[4],f[5],f[6]];if(p.some(x=>x===undefined||x.trim()===''))continue;const v=p.map(Number);if(!v.every(Number.isFinite))continue;out[f[1]]=v;}
 return out;
}
async function applyApexes(call,caseId,affine,apex){
 let r;for(const side of ['R','L'])if(apex[side]){try{r=await call('apex',{case_id:caseId,side,point:lpsToVoxelFrac(affine,apex[side])});}catch(e){if(e.message!=='未対応の操作です。')throw e;console.error(`警告: 蝸牛頂（${side}）は無視しました。指定した Studio は apex 操作に未対応です（0.9.0-dev 以降が必要）。`);}}
 return r;
}
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const fileLike=p=>{const b=fs.readFileSync(p);return {name:path.basename(p),size:b.length,slice:(x,y)=>new Blob([b.subarray(x,y)]),arrayBuffer:async()=>b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength)};};
async function main(argv){
 const opt={};for(let i=0;i<argv.length;i+=2)opt[argv[i].replace(/^--/,'')]=argv[i+1];
 const studio=opt.studio||path.join(__dirname,'..','runtime');
 let pending;global.self={postMessage:d=>{if(!('progress' in d))pending(d);}};
 const E=require(path.join(studio,'artifacts','engine.cjs'));require(path.join(studio,'artifacts','worker.cjs'));
 const call=(action,payload)=>new Promise((res,rej)=>{pending=d=>d.error?rej(Error(d.error)):res(d.result);self.onmessage({data:{id:1,action,payload}});});
 const files=walk(opt.dicom).map(fileLike);
 const study=selectStudy(await call('scan',{files}),opt.mode||'ppi_pei');
 const c=await call('load',loadPayload(study,opt));
 const first=await call('export',{case_id:c.id,language:'en'});
 const affine=JSON.parse(E.strFromU8(E.unzipSync(first.bytes)['report.json'])).affine;
 const seeds=parseLandmarks(fs.readFileSync(opt.landmarks,'utf8'));
 let r;for(const label of [1,2,3,4])r=await call('seed',{case_id:c.id,label,point:lpsToVoxel(affine,seeds[label])});
 if(!r.has_roi)throw Error('抽出が実行されませんでした。');
 const apexR=await applyApexes(call,c.id,affine,parseApex(fs.readFileSync(opt.landmarks,'utf8')));if(apexR)r=apexR;
 const out=await call('export',{case_id:c.id,language:'en'});fs.mkdirSync(opt.out,{recursive:true});
 fs.writeFileSync(path.join(opt.out,`${opt.name}_studio_auto.zip`),out.bytes);
 const z=E.unzipSync(out.bytes);fs.writeFileSync(path.join(opt.out,`${opt.name}_measurements.csv`),E.strFromU8(z['measurements.csv']));fs.writeFileSync(path.join(opt.out,`${opt.name}_report.json`),E.strFromU8(z['report.json']));
 console.log(JSON.stringify({case:opt.name,input_mode:r.input_mode??'ppi_pei',k:r.k??null,rows:r.rows.filter(x=>x.image==='hydrops').map(x=>({label:x.label,ratio:x.ratio_percent,fluid:x.fluid_voxels})),qc:r.enhancement_qc?r.enhancement_qc.verdict:null}));
}
module.exports={invert4,mul4,lpsToVoxel,selectStudy,loadPayload,seriesByDescription,parseLandmarks,parseApex,applyApexes};
if(require.main===module)main(process.argv.slice(2)).catch(e=>{console.error(e.message);process.exitCode=1;});
