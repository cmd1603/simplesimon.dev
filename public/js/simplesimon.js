'use strict'
$(document).ready(function() {
	$('#box1').click(function(){
		console.log(im clicking)
		$('#animate-box').animate({
			opacity: '0'
		})
	})
}); 