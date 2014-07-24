// Global JS

window.onload = function() {

	var playBtn = document.getElementById('play');
	var pauseBtn = document.getElementById('pause');
	var rewindBtn = document.getElementById('rewind');

	var player1 = document.getElementById("player1");
	var player2 = document.getElementById("player2");
	var player3 = document.getElementById("player3");

	var player1_movement = new TweenLite(player1, 5, {left:"75%"});
	var player2_movement = new TweenLite(player2, 5, {left:"25%"});
	var player3_movement = new TweenLite(player3, 5, {left:"50%"});

	playBtn.onclick = function() {
		player1_movement.play();
		player2_movement.play();
		player3_movement.play();
	}

	pauseBtn.onclick = function() {
		player1_movement.pause();
		player2_movement.pause();
		player3_movement.pause();
	}

	rewindBtn.onclick = function() {
		player1_movement.reverse();
		player2_movement.reverse();
		player3_movement.reverse();
	}

	// TweenLite.to(player1, 2, {top:"500px", delay:1.9});
	// TweenLite.to(player2, 2, {top:"500px", delay:1.9});
	// TweenLite.to(player3, 2, {top:"300px", delay:1.9});
}