/* 
  Original source: http://widget.cekresi.co.id/widget.js
*/

function init_widget_jne(token){
  function sizeFrame() {
    var F = document.getElementById("widgetjne");

    if(F.contentDocument) {
      F.height = F.contentDocument.documentElement.scrollHeight+30; //FF 3.0.11, Opera 9.63, and Chrome
    } else {
      F.height = F.contentWindow.document.body.scrollHeight+30; //IE6, IE7 and Chrome
    }
  }
  window.onload=sizeFrame; 
  document.getElementById("widget_jne").innerHTML='<iframe src="http://box.cekresi.co.id/?token='+token+'" id="widgetjne" scrolling="no" width="100%" height="250px" marginheight="0" frameborder="0"></iframe>';
}