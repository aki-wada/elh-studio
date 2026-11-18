# Release notes

## Version 1.3.2

Version 1.3.2 fixes one bug of version 1.3.1 and labels LUMEN as under verification. Prepared 18 November 2026.

- Fixed: When a center point is placed, the app snaps it to the brightest MRC voxel nearby (within about 1 mm). In 1.3.1, placing one center point again snapped all four center points again, so an untouched center point could move and the region and volume ratio of that site could change. In 1.3.2, only the point that was placed is snapped. The other three points do not move, and the regions extracted from the center points and the volume ratios of the opposite ear do not change.
- Unchanged (other than the fix): the calculation method (image creation, thresholds, radii, snapping, volume ratio), the reference template and the format of the saved ZIP. Placing the four points from a state with no center points, and using only the automatic detection, give the same results as in 1.3.1.
- May change: values obtained by placing a center point again once the four points exist (after the automatic detection, after placing the four points by hand, or after opening saved results).
- Behavior that remains: placing a center point again still rebuilds the regions of both ears. Corrections made by contour editing or by two-plane removal are discarded.
- LUMEN label: a 「検証中」 label (Under verification in English) is shown next to the Go to LUMEN manual analysis button and next to the title of the LUMEN view. LUMEN is a visualization module under verification; its verification is separate from the evaluation of the volume ratio. The volume ratio screen and calculations are unchanged.
- Results saved by 1.3.1: A result saved by 1.3.1 after a center point was placed again once the four points existed was saved with the regions as they moved at that re-placement. Opening it in 1.3.2 does not change it. To bring that examination to the 1.3.2 values, load it again from the images, place the center points and extract again. Whether a re-placement happened cannot be told reliably from the saved result (manual_seed_edit in report.json is also true when the four points are first placed by hand).
- The technical evaluation (`VALIDATION.md`, `reproducibility/`) was performed with version 1.3.1. With the 1.3.2 engine and worker, the reproducibility runner gave the same 32 region-condition rows. The operation manuals are the concise editions of 15 November 2026; page 4 describes placing a center point again in 1.3.2.

1.3.2 は 1.3.1 の不具合を 1 つ直し、LUMEN に「検証中」の札を付けた版です（2026 年 11 月 18 日準備）。

- 直したこと：中心点を置くと、アプリはその点を、近く（約 1 mm 以内）で MRC がいちばん明るい画素へ寄せます。1.3.1 では、中心点を 1 つ置き直すと 4 点すべてを寄せ直していたため、触っていない中心点が動き、その部位の領域と体積比が変わることがありました。1.3.2 では、寄せるのは置いた 1 点だけです。ほかの 3 点は動かず、反対の耳の、中心点から抽出した領域と体積比は変わりません。
- 変わらないこと：計算の方法（画像の作成、しきい値、半径、点を寄せる方法、体積比）、参照テンプレート、保存 ZIP の形式。中心点が無い状態から 4 点を置いたとき、自動検出だけを使ったときの結果は 1.3.1 と同じです。
- 変わりうること：4 点がそろった後（自動検出の後、4 点を手で置いた後、保存結果を開いた後）で中心点を置き直した場合の値。
- 残る動き：中心点を置き直すと、これまでどおり両耳の領域を作り直します。輪郭や 2 方向の削除での修正は消えます。
- LUMEN の表示：「LUMEN の手動解析へ」のボタンの横と、LUMEN の画面の題の横に「検証中」の札を付けました（英語の表示では Under verification）。LUMEN は検証中の可視化機能で、その検証は体積比の評価とは別です。体積比の画面と計算は変わりません。
- 1.3.1 で保存した結果：1.3.1 で、4 点がそろった後に中心点を置き直して保存した結果は、置き直しで動いた領域のまま保存されています。1.3.2 で開いても変わりません。その検査を 1.3.2 の値にそろえるには、画像から読み込み直し、中心点を置いて抽出し直してください。保存結果からは、置き直しがあったかどうかを確実には見分けられません（report.json の manual_seed_edit は、4 点を初めて手で置いたときにも true になります）。
- 技術的な評価（`VALIDATION.md`、`reproducibility/`）は 1.3.1 で行いました。1.3.2 の計算部分で再現の手順を動かし、32 行が同じになることを確かめました。操作マニュアルは 2026 年 11 月 15 日の簡潔版で、4 ページに 1.3.2 の中心点の置き直しの動きを書いてあります。

## Version 1.3.1.1

Version 1.3.1.1 updates the operation manuals only. The application (ELH_Studio.html) is identical to version 1.3.1, and the calculations are unchanged.

Prepared 15 November 2026. The Japanese and English PDF manuals were replaced with concise editions of nine pages each; see `MANUAL_UPDATES.md`. The application HTML has the same SHA-256 as in version 1.3.1 (0c48c6b8233b9267f3ff75bb6ce0b2eac1219fdc413996195d3edbc7647458ab). Cite the software as version 1.3.1.

1.3.1.1 は操作マニュアルの更新のみです。アプリ（ELH_Studio.html）は 1.3.1 と同一で、計算も変わりません。

## Version 1.3.1

Prepared 8 November 2026 and published on GitHub on 9 November 2026. These dates are not a paper-acceptance date.

The application HTML is unchanged from the frozen public build. This package adds bilingual repository guidance, research-use terms, software citation, complete third-party notices, dated manual updates and the current four-case reproducibility materials.

The application does not require Python or Node.js. Reproduction scripts require a separate Python environment and Node.js. No synthetic DICOM/NIfTI cases or original source MRI volumes are bundled.

See `BUILD_PROVENANCE.json` for file identities. The repository and release assets are published at https://github.com/aki-wada/elh-studio.
