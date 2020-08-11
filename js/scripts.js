$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#emu-showing").toggle();
    $("#emu-hidden").toggle();
  });
});

$(document).click(function(){
  $("#walrus-hidden").fadeTo("#walrus-showing");
  $("#walrus-showing").fadeToggle("slow");
});

$(document).click(function(){
  $("#emu-hidden").fadeTo("#emu-showing");
  $("#emu-showing").fadeToggle("slow");
});

$("#").click(function(){
  $("#").slideUp();
});

$("#flip").click(function(){
  $("#panel").slideDown();
});

$("#flip").click(function(){
  $("#panel").slideToggle();
});


