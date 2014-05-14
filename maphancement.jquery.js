/*Maphancement - Google Maps (progressive enhanced) - At first load only the static image of the map is loaded, once the user interacts with the map the iframe with the dynamic map is loaded Author: Michael Scharnagl, @justmarkup, 2014 | License: MIT */

/*global jQuery*/
(function ($) {
	
	// Enable strict mode
	"use strict";

	// Loop the pictures
	var map = $('img[data-map]');

	// Replace img with dynamic map in iframe
	var maphancement = function() {
		var mapIframe = $('<iframe />', {
			width: map.width(),
			height: map.height(),
			src: map.attr('src').replace("http://maps.googleapis.com/maps/api/staticmap", "http://maps.google.de/maps").replace("?center", "?q") + "&output=embed"
		});
				
		map.replaceWith(mapIframe);
	};

	if (map) {
		map.bind('click', maphancement);
	}

}( jQuery ));