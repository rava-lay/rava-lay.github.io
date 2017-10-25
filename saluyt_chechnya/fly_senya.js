$(document).ready(function(){

	function fly_senya() { 
	
		var top = Math.round(Math.random() * (100 - 1) + 1);
		var right = Math.round(Math.random() * (1000 - 1) + 1);
		var bottom = Math.round(Math.random() * (100 - 1) + 1);
		var left = Math.round(Math.random() * (1000 - 1) + 1);

		$('#fly_senya').animate({'margin': + top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px'},1000);
	}
	
	setInterval(fly_senya, 50);	
});