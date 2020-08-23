$(function() {
	removeTransition = false;
	setInterval( function() {
		d = new Date();
		
		var seconds = d.getSeconds();
		var sdegree = seconds * 6;
		var srotate = "rotate(" + sdegree + "deg)";
		
		var mins = d.getMinutes();
		var mdegree = mins * 6;
		var mrotate = "rotate(" + mdegree + "deg)";
		
		var hours = d.getHours();
		var hdegree = hours * 30 + (mins / 2);
		var hrotate = "rotate(" + hdegree + "deg)";
		
		
		$(".second").css({ "transform" : srotate });
		$(".minute").css({ "transform" : mrotate });
		$(".hour").css({ "transform" : hrotate });
		
		if(removeTransition){
		  
			$(".second").css({ "transition" : "none" });
			$(".minute").css({ "transition" : "none" });
			$(".hour").css({ "transition" : "none" });
		}else{
			removeTransition = true
		}		
	}, 1000 );
});