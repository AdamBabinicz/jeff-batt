// Page Load Function
function pageLoaded() {
	//Btn 1
	$('.section1Btn').on('click', function () {
		// Section 1
		$('.section1').addClass('animated bounce');
	})

	$('.section2Btn').on('click', function () {
		// Section 2
		$('.section2').addClass('animated shake');
	})

	$('.section3Btn').on('click', function () {
		// Section 3
		$('.section3').addClass('animated tada');
	})

}

function animate4() {
	// Section 4
	$('.section4').addClass('animated jello');
}
