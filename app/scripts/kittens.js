"use strict";

var kittens = {
	activate: function() {
		var imgs = document.getElementsByTagName ('img');
		for (var i = 0; i < imgs.length; i++) {
			var img = imgs[i], w = img.width, h = img.height;
		    if (w && h) {
		        img.src = 'http://placekitten.com/'+w+'/'+h;;
		    }
		}
	}
}
