# マック屋のデスクトップ

Windows 98風のデスクトップUIを再現したウェブサイトです。

## 概要

このプロジェクトは、懐かしのWindows 98のデスクトップ環境をウェブブラウザ上で再現したものです。デスクトップアイコンをクリックするとウィンドウが開き、様々なコンテンツを閲覧できます。

## 主な機能

- **デスクトップアイコン**: ABOUT、JS、PHP、Linkの4つのアイコンから情報にアクセス
- **ウィンドウ操作**: ウィンドウの開閉が可能
- **タブ切り替え**: アイコンをクリックすることでコンテンツを切り替え
- **リアルタイム時計**: フッターに現在時刻を表示
- **スタートボタン**: クリックすると計算問題が出題される

## 使用技術

- **HTML5**: ページ構造
- **CSS**: スタイリング
  - [98.css](https://jdan.github.io/98.css/): Windows 98風のスタイル
  - Bootstrap 5: レスポンシブレイアウト
- **JavaScript**: インタラクティブ機能
  - `clock.js`: リアルタイム時計表示
  - `tab.js`: タブ切り替え機能
  - `start.js`: スタートボタンの計算問題機能
- **Font Awesome**: アイコン

## ファイル構成

```
.
├── index.html          # メインHTMLファイル
├── css/
│   └── style.css      # カスタムスタイルシート
├── js/
│   ├── clock.js       # 時計表示機能
│   ├── start.js       # スタートボタン機能
│   └── tab.js         # タブ切り替え機能
└── img/               # 画像ファイル
    ├── bg_black.jpeg
    ├── bg_blue.jpeg
    ├── folder_green.png
    ├── folder_purple.png
    ├── folder_yellow.png
    └── pc_desktop.png
```

## 使い方

1. `index.html`をブラウザで開く
2. デスクトップアイコンをクリックしてウィンドウを開く
3. ウィンドウ内のタブを切り替えて各コンテンツを閲覧
4. フッターの「スタート」ボタンをクリックして計算問題に挑戦

## 参考資料

このサイトの制作にあたり、以下のリソースを参考にしました：

- [98.css](https://jdan.github.io/98.css/) - Windows 98風CSS
- [JavaScriptで時計表示](https://www.nishishi.com/javascript-tips/realtime-clock-setinterval.html)
- [ドット絵素材](https://dot-illust.net/)
- [ページ移動せずに内容を切り替えるタブ機能](https://allabout.co.jp/gm/gc/23969/)
- [onsubmitでJavaScriptの処理を発動](https://programmingstudyblog.seesaa.net/article/477045699.html)

## ライセンス

このプロジェクトは個人学習用に作成されたものです。
