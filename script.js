var sec = 0;
var count = 0;
let timer = false;
function start() {
  timer = true;
  stopwatch();
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;
  sec = 0;
  count = 0;
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("milli_seconds").innerHTML = "000";
}
function stopwatch() {
  if (timer == true) {
    count += 15;
    if (count > 999) {
      sec += 1;
      count = 0;
    }

    var secString = sec;
    var countString = count;
    if (sec < 10) secString = "0" + secString;
    if (count < 10) countString = "00" + countString;
    if (count >= 10 && count <= 99) countString = "0" + countString;
    if (count >= 100) countString = countString;

    document.getElementById("seconds").innerHTML = secString;
    document.getElementById("milli_seconds").innerHTML = countString;
    setTimeout("stopwatch()", 10);
  }
}
