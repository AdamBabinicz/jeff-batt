// Animate End
var animationEnd = (function(el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

// Page Load Function
function pageLoaded(){

	// Section 1
	$('.section1Btn').on('click', function(){
		// Section 1
		$('.section1').addClass('animated bounce');
		$('.section1').one(animationEnd, removeAni1);
	})

	// Section 2
	$('.section2Btn').on('click', function(){
		// Section 2
		$('.section2').addClass('animated shake');
		$('.section2').one(animationEnd, removeAni2);
	})

	// Section 3
	$('.section3Btn').on('click', function(){
		// Section 3
		$('.section3').addClass('animated tada');
		$('.section3').one(animationEnd, removeAni3);
	})

	// Section 4
	$('.section4Btn').on('click', function(){
		// Section 4
		$('.section4').addClass('animated jello');
		$('.section4').one(animationEnd, removeAni4);
	})

}

// Animation 1 completes
function removeAni1(){
	$('.section1').removeClass('animated bounce');
}

// Animation 2 completes
function removeAni2(){
	$('.section2').removeClass('animated shake');
}

// Animation 3 completes
function removeAni3(){
	$('.section3').removeClass('animated tada');
}

// Animation 4 completes
function removeAni4(){
	$('.section4').removeClass('animated jello');
}