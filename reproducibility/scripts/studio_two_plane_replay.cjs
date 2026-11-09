#!/usr/bin/env node
// Replay recorded two-plane deletions with ELH Studio's own Worker (the build is only read, nothing in it is changed): open a saved Studio
// ZIP as "Open saved results" does (restore), apply each edit in order (cut_preview, then cut_apply; an edit whose preview holds no voxel is
// not applied, as Studio refuses an empty deletion) and export the case in English to a new ZIP.
// Usage: node tools/studio_two_plane_replay.cjs --studio <absolute Studio folder> --zip <saved ZIP> --edits <edits.json> --out <new ZIP>
//   edits.json: [{"label": 1-4, "axial": [[x, y], ...], "coronal": [[x, z], ...], "drawn_at": {...}}, ...], applied in this order
//   prints one JSON line per edit: {"label": <label>, "count": <voxels in the preview>, "applied": true|false}
//   refuses an --out that exists (nothing is overwritten); an error: its message on stderr, exit status 1
// Loads the Studio build as tools/studio_batch.cjs does (artifacts/engine.cjs, then artifacts/worker.cjs, with a stand-in for the Worker's self).
const fs=require('node:fs'),path=require('node:path');
function options(argv){
 const opt={};
 for(let i=0;i<argv.length;i+=2){
  if(!/^--(studio|zip|edits|out)$/.test(argv[i])||argv[i+1]===undefined)throw Error(`unknown option or a missing value: ${argv[i]} (usage: --studio <absolute folder> --zip <ZIP> --edits <JSON> --out <ZIP>)`);
  opt[argv[i].slice(2)]=argv[i+1];
 }
 for(const k of ['studio','zip','edits','out'])if(!opt[k])throw Error(`missing --${k} (usage: --studio <absolute folder> --zip <ZIP> --edits <JSON> --out <ZIP>)`);
 if(!path.isAbsolute(opt.studio))throw Error(`--studio must be an absolute path (the build is loaded with require): ${opt.studio}`);
 if(fs.existsSync(opt.out))throw Error(`${opt.out} already exists: nothing is overwritten`);
 let edits;
 try{edits=JSON.parse(fs.readFileSync(opt.edits,'utf8'));}catch(e){throw Error(`cannot read the edits ${opt.edits}: ${e.message}`);}
 if(!Array.isArray(edits)||!edits.length)throw Error(`no edit in ${opt.edits} (a JSON array of {label, axial, coronal, drawn_at})`);
 return {...opt,edits};
}
async function main(argv){
 const opt=options(argv);
 let pending;global.self={postMessage:d=>{if(!('progress' in d))pending(d);}};
 require(path.join(opt.studio,'artifacts','engine.cjs'));require(path.join(opt.studio,'artifacts','worker.cjs'));
 const call=(action,payload)=>new Promise((res,rej)=>{pending=d=>d.error?rej(Error(`${action}: ${d.error}`)):res(d.result);self.onmessage({data:{id:1,action,payload}});});
 const b=fs.readFileSync(opt.zip);
 const file={name:path.basename(opt.zip),size:b.length,arrayBuffer:async()=>b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength)};
 const c=await call('restore',{file});
 for(const e of opt.edits){
  const p=await call('cut_preview',{case_id:c.id,label:e.label,axial:e.axial,coronal:e.coronal,drawn_at:e.drawn_at});
  const applied=p.count>0;
  if(applied)await call('cut_apply',{case_id:c.id,token:p.token});
  console.log(JSON.stringify({label:e.label,count:p.count,applied}));
 }
 const out=await call('export',{case_id:c.id,language:'en'});
 fs.writeFileSync(opt.out,out.bytes,{flag:'wx'});  // 'wx': never over a file that appeared meanwhile
}
main(process.argv.slice(2)).catch(e=>{console.error(e.message);process.exitCode=1;});
