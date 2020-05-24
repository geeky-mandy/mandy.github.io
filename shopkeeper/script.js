
// $(document).ready(function(){
//   $('.your-class').slick({
//     setting-name: setting-value
//   });
// });

$(".slider-one")
	.not(".slick-intialized")
	.slick({
	autoplay: true,  //automatically start slider
	autoplaySpeed: 3000,
	dots: false,
	nextArrow: false,
	prevArrow: false,
})
	
$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: false,
  prevArrow: false,
});