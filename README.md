# cohsh.github.io

Kohei Ishii's Website — https://cohsh.github.io

内容は `data/*.json` にあり、そこから静的な HTML を生成して GitHub Pages で配信している。
各ページは本文と CSS を含んだ完成品として出力されるので、表示に JavaScript を必要としない。

## 内容を更新する

1. `data/*.json` を編集する
2. `npm run build`
3. 生成された HTML ごとコミットする（GitHub Pages はビルドせず、そのまま配信するため）

`npm run build` は TypeScript のコンパイル、10 ページの生成、フォントの収録漏れ検査をこの順で行う。
新しい漢字を含む内容を追加すると検査が失敗するので、その場合は `npm run font` でサブセットを作り直す。

| コマンド | 内容 |
| --- | --- |
| `npm run build` | ページを生成する |
| `npm run watch` | TypeScript を監視してコンパイルする |
| `npm run font` | フォントのサブセットを作り直す（Python と fonttools が必要） |

## 構成

```
data/*.json     内容
css/style.css   スタイル（生成時に各ページへインライン展開される）
fonts/          Noto Sans JP のサブセット（このサイトで使う文字だけ・約 55 KB）

src/site.ts     ページと言語の定義
src/render.ts   data → HTML の変換
src/build.ts    ページ生成（Node で実行）
src/router.ts   ページ遷移（ブラウザで実行）

scripts/build-font.py           フォントのサブセット生成
scripts/check-font-coverage.mjs 収録漏れの検査

index.html, cv/, research/, publication/, presentation/    生成物
ja/ 以下に日本語版                                          生成物
sitemap.xml, robots.txt                                    生成物
```

`dist/router.js` は初期表示のあとに読み込まれ、残りのページを先読みしておく。
以降のページ遷移と言語切り替えは通信を伴わない。読み込みに失敗しても、リンクは通常の遷移として機能する。

## URL

| | 英語 | 日本語 |
| --- | --- | --- |
| Top | `/` | `/ja/` |
| Research | `/research/` | `/ja/research/` |
| CV | `/cv/` | `/ja/cv/` |
| Publication | `/publication/` | `/ja/publication/` |
| Presentation | `/presentation/` | `/ja/presentation/` |

## Branch
- [main](https://github.com/cohsh/cohsh.github.io/tree/main)

    メインブランチ

- [php](https://github.com/cohsh/cohsh.github.io/tree/php)

    GitHub PagesでPHPが動かないことを知らずに作った没版のブランチ（最終更新: 2022/12/04）
