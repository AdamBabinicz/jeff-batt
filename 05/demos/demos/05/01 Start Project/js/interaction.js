// Page Load Function
function pageLoaded() {
	//Section 1
	$(".section1").on('click', function () {
		$(".section1").toggleClass('animated zoomIn');
	})
	//Section 2
	$(".section2").on('click', function () {
		$(".section2").toggleClass('animated zoomIn');
	})
	//Section 3
	$(".section3").on('click', function () {
		$(".section3").toggleClass('animated zoomIn');
	})
	//Section 4
	$(".section4").on('click', function () {
		$(".section4").toggleClass('animated zoomIn');
	})
	//Phone
	$(".phone").on('mouseenter', function () {
		$(".phone").toggleClass("animated bounceInRight");
	})
}
