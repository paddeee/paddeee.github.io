
jQuery(document).ready(function ($) {

	var touchEvents = function() {

		var bool;

		if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
			bool = true;
		}
		return bool;
	};

	var sliderOptions = {
		$AutoPlay: false,
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$
		},
		$ThumbnailNavigatorOptions: {
			$Class: $JssorThumbnailNavigator$,
			$Cols: 10,
			$SpacingX: 8,
			$SpacingY: 8,
			$Align: 360
		}
	};

	var slider;
	var heroSlider;
	var $slider = document.querySelector('#Slider');
	var $heroSlider = document.querySelector('#HeroSlider');
	var $sliderArrowsContainer = document.querySelector('#SliderArrowsContainer');

	// Hide navigation arrows if viewing on touch screen device

	if (touchEvents()) {
		$sliderArrowsContainer.classList.add('is-hidden');
	}

	if ($slider) {

		slider = new $JssorSlider$("Slider", sliderOptions);

		function ScaleSlider() {
			var refSize = slider.$Elmt.parentNode.clientWidth;
			if (refSize) {
				refSize = Math.min(refSize, 800);
				slider.$ScaleWidth(refSize);
			}
			else {
				window.setTimeout(ScaleSlider, 30);
			}
		}
		ScaleSlider();
		$(window).bind("load", ScaleSlider);
		$(window).bind("resize", ScaleSlider);
		$(window).bind("orientationchange", ScaleSlider);
		//responsive code end
	}

	if ($heroSlider) {

		if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
		{
			ieNoSlider();
			return;
		}

		heroSlider = new $JssorSlider$("HeroSlider", sliderOptions);

		function ieNoSlider() {
			var firstImage = document.querySelector('.slider__slides div:first-child');

			firstImage.style.display = 'block';
			firstImage.style.visibility = 'visible';
			$sliderArrowsContainer.classList.add('is-hidden');
		}

		function ScaleSlider() {
			var refSize = heroSlider.$Elmt.parentNode.clientWidth;
			if (refSize) {
				refSize = Math.min(refSize, 1920);
				heroSlider.$ScaleWidth(refSize);
			}
			else {
				window.setTimeout(ScaleSlider, 30);
			}
		}
		ScaleSlider();
		$(window).bind("load", ScaleSlider);
		$(window).bind("resize", ScaleSlider);
		$(window).bind("orientationchange", ScaleSlider);
		//responsive code end
	}
});