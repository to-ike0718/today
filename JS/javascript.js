var today = new Date(); // Date() インスタンス化（実態）
var todayHtml = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate() + "  " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
window.onload = function () {
 var P = document.getElementById('test');
 console.log(P)
 P.innerHTML = '<P class="date">' + todayHtml + '</P>'
}