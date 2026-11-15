# Manual updates

## 15 November 2026: concise manuals (version 1.3.1.1)

Version 1.3.1.1 updates the operation manuals only. The application (`app/ELH_Studio.html`) is identical to version 1.3.1, and the calculations are unchanged.

The Japanese and English PDF manuals were replaced with concise editions of nine pages each (plus a cover). They cover the steps from loading a study to the first results, the removal of the internal auditory canal fluid (a required step), LUMEN and saving. The earlier 34-page manuals remain in the version 1.3.1 ZIP of Release v1.3.1.

## 8 November 2026

These notes update the verification status stated in the earlier 34-page manuals of version 1.3.1 (the ZIP of Release v1.3.1).

- The manuals' statement that launch on an actual Windows PC is unverified is outdated. The developer reported basic Windows/Chrome launch and saving checks on 5 November 2026. This does not establish numerical accuracy across Windows systems or scanners.
- For the Technical Note, use the current four-case evaluation in [VALIDATION.md](VALIDATION.md) and `reproducibility/results`. Earlier development checks in the PDFs are not the current final segmentation results.
- The public HTML retained here starts in English. The language choice can be changed and saved. The calculation code is unchanged from the evaluated build; see `BUILD_PROVENANCE.json`.
- LUMEN remains experimental. Its verification is separate from the ELS volume and volume ratio evaluation in the Technical Note.

## 日本語

### 2026年11月15日：簡潔版のマニュアル（1.3.1.1）

1.3.1.1 は操作マニュアルの更新のみです。アプリ（`app/ELH_Studio.html`）は 1.3.1 と同一で、計算も変わりません。

日英のPDFマニュアルを、各9ページ（表紙を除く）の簡潔版に差し替えました。検査の読み込みから最初の結果まで、内耳道の液の除去（必須の手順）、LUMEN、保存を扱います。以前の34ページの版は、Release v1.3.1 の 1.3.1 のZIPに入っています。

### 2026年11月8日

1.3.1 の以前の34ページのマニュアル（Release v1.3.1 のZIPに入っているもの）の確認状況についての追補です。「Windows実機での起動は未確認」という記述は古い情報です。2026年11月5日に開発者がWindows/Chromeで基本的な起動・保存を確認しています。Windows全般での数値精度を検証した意味ではありません。

最新の合成4例の評価は `VALIDATION.md` と `reproducibility/results` を参照してください。PDF内の開発時確認と現在の最終数値を区別してください。LUMENの検証は主なELS容積評価とは別です。
