$("#flipbook").turn({
  width: 400,
  height: 300,
  page: 1,
  autoCenter: true,
  duration: 1000,
  display: "double",
  acceleration: true,
  gradients: !$.isTouch,
  elevation: 50,
});
// Page turn on left and right keypress
$(window).bind("keydown", function (e) {
  if (e.keyCode == 37) $("#flipbook").turn("previous");
  else if (e.keyCode == 39) $("#flipbook").turn("next");
});

// for second flipbook i.e. magazine
$("#magazine").turn({
  width: 400,
  height: 300,
  page: 1,
  autoCenter: true,
  duration: 1000,
  display: "double",
  acceleration: true,
  gradients: !$.isTouch,
  elevation: 50,
});
// Page turn on left and right keypress
$(window).bind("keydown", function (e) {
  if (e.keyCode == 37) $("#magazine").turn("previous");
  else if (e.keyCode == 39) $("#magazine").turn("next");
});
