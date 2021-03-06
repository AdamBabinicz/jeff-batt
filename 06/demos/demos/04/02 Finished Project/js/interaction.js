$.fn.extend({
  animateCss: function(animationName, callback) {
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

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

// Page Load Function
function pageLoaded(){
	
	// Section 1
	$('.section1').on('click', function(){
		$('.section1').animateCss('bounce', function(){
			$('.section2').animateCss('bounce', function(){
				$('.section3').animateCss('bounce', function(){
					$('.section4').animateCss('bounce');
				})
			})
		});
	});

	// Section 2
	$('.section2').on('click', function(){
		
	});

	// Section 3
	$('.section3').on('click', function(){
		
	});

	// Section 4
	$('.section4').on('click', function(){
		
	});

	// Phone
	$('.phone').on('mouseenter', function(){
		
	});

}