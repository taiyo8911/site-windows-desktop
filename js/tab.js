"use strict";

// アイコンが押された時の処理
// 対象要素を取得する
var tabs = document.getElementById('contents_control').getElementsByTagName('a');
var pages = document.getElementById('contents_body').getElementsByTagName('div');

// タブの切り替え処理
function changeTab() {
    // href属性値から対象のid名を抜き出す
    var targetid = this.href.substring(this.href.indexOf('#') + 1, this.href.length);

    // 指定のタブページだけを表示する
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].id != targetid) {
            pages[i].style.display = "none";
        }
        else {
            pages[i].style.display = "block";
        }
    }

    // クリックされたタブを前面に表示する
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.zIndex = "0";
    }
    this.style.zIndex = "10";
}

// すべてのタブに対して、クリック時にchangeTab関数が実行されるよう指定する
for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = changeTab;
}

tabs[0].onclick();