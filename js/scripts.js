$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle(fast);
  });

  $(".clickable1").click(function() {
    $("#emu-showing").slideToggle();
    $("#emu-hidden").slideToggle(fast);
  });
});

// $(".clickable").click(function(){
//   $("#walrus-hidden").fadeTo();
//   $("#walrus-showing").fadeToggle("slow");
// });

// $(".clickable1").click(function(){
//   $("#emu-hidden").fadeTo();
//   $("#emu-showing").fadeToggle("slow");
// });

// $(document).click(function(){
//   $(".slide").slideUp();
// });

// $("#flip").click(function(){
//   $("#panel").slideDown();
// });

// $("#flip").click(function(){
//   $("#panel").slideToggle();
// });


