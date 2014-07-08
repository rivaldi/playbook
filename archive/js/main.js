$(document).ready(function() {

  // Set field height to fullscreen
  $(window).bind("load resize", function() {                
    var v = $(window).height(); // v = viewport height
	$("#field").height(v);
  });
  
  // player animations
  $("#play").click(function () {
	if ($("#remote-control").hasClass("play")) {
		return false;
	} else {
		$("#remote-control").addClass("play").removeClass("rewind");
		$("#field > div").each(function(index) {
		  var a = $(this).attr('class');
		  switch(a) {
			case 'curl':
				$(this).animate({ bottom: '+=100' }, 750, function() {
					$(this).animate({ left: '+=25', bottom: '-=25' }, 750)
				});
			break;
			case 'fly':
				$(this).animate({ bottom: '+=350' }, 1500)
			break;
			case 'quick-in':
				$(this).animate({ bottom: '+=150' }, 500, function() {
					$(this).animate({ left: '+=100' }, 1000)
				});
			break;
			case 'quick-out':
				$(this).animate({ bottom: '+=150' }, 500, function() {
					$(this).animate({ left: '-=100' }, 1000)
				});
			break;
			case 'slant':
				$(this).animate({ left: '-=25', bottom: '+=150' }, 750, function() {
					$(this).animate({ bottom: '+=100'}, 750)
				});
			break;
		  }
	  });
	}
  });
  $("#rewind").click(function () {
	if ($("#remote-control").hasClass("rewind")) {
		return false;
	} else {
	  $("#remote-control").addClass("rewind").removeClass("play");
	  $("#field > div").each(function(index) {
		  var a = $(this).attr('class');
		  switch(a) {
			case 'curl':
				$(this).animate({ left: '-=25', bottom: '+=25' }, 650, function() {
					$(this).animate({ bottom: '-=100' }, 650)
				});
			break;
			case 'fly':
				$(this).animate({ bottom: '-=350' }, 1500)
			break;
			case 'quick-in':
				$(this).animate({ left: '-=100' }, 500, function() {
					$(this).animate({ bottom: '-=150' }, 1000)
				});
			break;
			case 'quick-out':
				$(this).animate({ left: '+=100' }, 500, function() {
					$(this).animate({ bottom: '-=150' }, 1000)
				});
			break;
			case 'slant':
				$(this).animate({ bottom: '-=100'}, 750, function() {
					$(this).animate({ left: '+=25', bottom: '-=150' }, 750)
				});
			break;
		  }
	  });
	}
  });
  
});