// Page Load Function
function pageLoaded() {

	// Section 1
	$('.section1Btn').on('click', function () {
		// Section 1
		$('.section1').toggleClass('animated bounce');
	})

	// Section 2
	$('.section2Btn').on('click', function () {
		// Section 2
		$('.section2').toggleClass('animated shake');
	})

	// Section 3
	$('.section3Btn').on('click', function () {
		// Section 3
		$('.section3').toggleClass('animated tada');
	})

}

function stopAni4() {
	$('.section4').toggleClass('animated jello');
}
