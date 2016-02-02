$(document).ready(function(){
  // console.log("hit!")

  blink()
})

var blink = setInterval(function(){
  console.log("blink!")
  $("#cursor").toggle()
}, 500)
