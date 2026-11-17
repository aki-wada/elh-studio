# ELH Studio

[English](README.md)

ELH Studioは、蝸牛・前庭の内リンパ腔（ELS）の体積・体積比を測定する研究用ブラウザアプリです。ELHはendolymphatic hydrops（内リンパ水腫）の略です。

HTMLファイルなので、Google Chromeで動作します。
PPIとPEIからHYDROPSを作成し、両耳の蝸牛・前庭の全液腔を抽出し、領域内のHYDROPS負値voxelをELSとして算出します。画像と中心点を確認し、内耳道の液を除いて（必須の手順）結果を保存します。

**研究用です。臨床性能は確立していません。** [利用条件](TERMS.md)を確認してください。再配布には開発者の事前許可が必要です。

## 起動

このリポジトリをZIPで取得して展開し、`app/ELH_Studio.html` をGoogle Chromeで開いてください。Windowsでは `app/Start_ELH.bat` も使用できます。アプリの実行にPython・Node.js・サーバーは不要です。

[簡単な手順](docs/QUICKSTART.md)、[日本語マニュアル](docs/操作マニュアル.pdf)、[マニュアル追補](docs/MANUAL_UPDATES.md)を参照してください。画面の言語は日本語・英語から選べます。

1.3.1.1 は操作マニュアルの更新のみです。アプリ（`app/ELH_Studio.html`）は 1.3.1 と同一です。

## 評価と再現資料

PPI・PEI・MRCを用いたELS体積・体積比が測定できます。検証は1名のオープンデータから作成した4合成症例・16領域で行っています。手動で編集した後のELS体積の平均差は蝸牛−0.5、前庭+4.8 mm³、体積比の平均差は+2.5、+0.1ポイントでした。液腔全体のDiceは0.80〜0.84です（ELSだけのDiceではありません）。

条件と限界は [Validation](docs/VALIDATION.md) にまとめています。[再現資料](reproducibility/README.md)には生成コード、信号値・雑音・乱数seed、参照ラベル、記録した編集操作、数値結果を含めています。合成DICOM/NIfTI症例一式や元MRI画像は同梱していません。

自動局在には公開VS-SEGの6例と左右鏡像の平均、LUMENにはIE-Map由来の蝸牛スケルトンを用いています。公開IE-Vnetのサンプルで評価しています。由来・変更内容・ライセンスは [第三者表示](THIRD_PARTY_NOTICES.txt) に記載しています。

論文などで解析結果を発表するときには版1.3.1と [ソフトウェア引用情報](CITATION.cff) を記載してください。論文DOIは現在準備中です。

尚、LUMENは現在検証中の可視化機能です。

不具合の報告には患者画像や個人情報を含めないでください。
