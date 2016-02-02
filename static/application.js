$(document).ready(function(){
  preventBackUp()
  $(document).keypress(typeKey)
  setInterval(function(){$("#cursor").toggle()}, 600)

})


var typeKey = function(event){
  // console.log($(".input").text(5))
  if (event.which == 127 || event.which == 8){
    event.preventDefault()
  }else {
    $(".input").append(String.fromCharCode(event.which))
  }
}
var preventBackUp = function(){
  var rx = /INPUT|SELECT|TEXTAREA/i;
  $(document).bind("keydown keypress", function(e){
    if( e.which == 8 ){ // 8 == backspace
      if(!rx.test(e.target.tagName) || e.target.disabled || e.target.readOnly ){
        e.preventDefault();
        var innerText = $(".input").text()
        $(".input").html(innerText.substr(0,innerText.length-1))
      }
    }
  });
}
