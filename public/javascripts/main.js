$(function() {
  var x = false;
  setBackground(function() {
    $("body").css("color", x ? "#FA9FD9" : "#4edacf","#65a576","#f2d83d");
    x = !x;
  }, 400);
});
