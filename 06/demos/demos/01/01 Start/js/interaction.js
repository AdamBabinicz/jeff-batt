// Page Load Function
function pageLoaded(){

	// Section 1
	$('.section1Btn').on('click', function(){
		// Section 1
		$('.section1').addClass('animated bounce');
	})

	// Section 2
	$('.section2Btn').on('click', function(){
		// Section 2
		$('.section2').addClass('animated shake');
	})

	// Section 3
	$('.section3Btn').on('click', function(){
		// Section 3
		$('.section3').addClass('animated tada');
	})

	// Section 4
	$('.section4Btn').on('click', function(){
		// Section 4
		$('.section4').addClass('animated jello');
	})

}