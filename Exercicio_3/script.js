
function vibrate() {
    navigator.vibrate(100);
    navigator.vibrate([100, 50, 100]);
    navigator.vibrate([230, 50, 50, 250]);
}
window.onload = vibrate();