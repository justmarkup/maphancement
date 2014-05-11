/*Maphancement - Google Maps (progressive enhanced) - At first load only the static image of the map is loaded, once the user interacts with the map the iframe with the dynamic map is loaded Author: Michael Scharnagl, @justmarkup, 2014 | License: MIT */

/*global document*/
(function (w) {
	
	// Enable strict mode
	"use strict";

	// Loop the pictures
	var map,
		maps = w.document.getElementsByTagName("img");
	
	for( var i = 0, il = maps.length; i < il; i++ ){
		if( maps[i].getAttribute( "data-map" ) !== null ){
			map = maps[i];
		}
	}

	// Replace img with dynamic map in iframe
	w.maphancement = function() {
		var mapIframe = document.createElement("iframe"),
			mapSource = map.src.replace("http://maps.googleapis.com/maps/api/staticmap", "http://maps.google.de/maps").replace("?center", "?q");
				
		mapIframe.height = map.height;
		mapIframe.width = map.width;
		mapIframe.src = mapSource + "&output=embed";
		map.parentNode.appendChild(mapIframe);
		map.parentNode.removeChild(map);
	};

	if (map) {
		// Run on click and dragstart
		if (map.addEventListener) {
			map.addEventListener("dragstart", w.maphancement, false);
			map.addEventListener("click", w.maphancement, false);
		} else if (w.attachEvent) {
			map.attachEvent ("ondragstart", w.maphancement); 
			map.attachEvent ("onclick", w.maphancement); 
		}
	}

}( this ));