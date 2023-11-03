// スタートボタンが押された時の処理（計算問題を表示する）
function start() {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const z = prompt(`${x} + ${y}は?`);
    if (z == x + y) {
        alert("正解!!");
    } else {
        alert(`残念。正解は${x + y}`);
    }
}