"use strict";
// 桁数が1桁だったら先頭に0を加えて2桁に調整する
function set2fig(num) {
    var ret;
    if (num < 10) { ret = "0" + num; }
    else { ret = num; }
    return ret;
}
function clock() {
    var nowTime = new Date();
    var nowHour = set2fig(nowTime.getHours());
    var nowMin = set2fig(nowTime.getMinutes());
    var target = document.getElementById("clock");
    target.innerText = `${nowHour}:${nowMin}`;
}
setInterval('clock()', 1000);