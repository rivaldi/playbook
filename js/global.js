// Global JS

window.onload = function() {

	function loadJSON(callback) {   

	    var xobj = new XMLHttpRequest();
	    xobj.overrideMimeType("application/json");
		xobj.open('GET', '../data/sample.json', true); // Replace 'my_data' with the path to your file
		
		xobj.onreadystatechange = function () {
	      if (xobj.readyState == 4 && xobj.status == "200") {
	        callback(xobj.responseText);
	      }
		};
		xobj.send(null);  
	}

	loadJSON(function(response) {
		// Parse JSON string into object
		var actual_JSON = JSON.parse(response);
	});

	// Remote Buttons
	var playBtn = document.getElementById('play');
	var pauseBtn = document.getElementById('pause');
	var rewindBtn = document.getElementById('rewind');
	var addPlayer = document.getElementById('add-player');

	// Players and movements
	var players = document.getElementsByClassName('player');
	var tweens = [];

	for (i=0; i < players.length; i++) {
		var distance = (i + 1) * 25;
		tweens.push(new TweenLite(players[i], 4, {left:distance + "%"}));
	}

	playBtn.onclick = function() {
		for (i=0; i < players.length; i++) {
			tweens[i].play();
		}
	}

	pauseBtn.onclick = function() {
		for (i=0; i < players.length; i++) {
			tweens[i].pause();
		}
	}

	rewindBtn.onclick = function() {
		for (i=0; i < players.length; i++) {
			tweens[i].reverse();
		}
	}

	addPlayer.onclick = function() {
		var playerNumber = players.length + 1;
		var field = document.getElementById('field');
		var newPlayer = document.createElement('div');

		newPlayer.id = "new" + playerNumber;
		newPlayer.className = "player";
		newPlayer.innerHTML = "N" + playerNumber;
		field.appendChild(newPlayer);
		tweens.push(new TweenLite(newPlayer, 4, {left:"500px"}));
	}


	// TweenLite.to(player1, 2, {top:"500px", delay:1.9});
	// TweenLite.to(player2, 2, {top:"500px", delay:1.9});
	// TweenLite.to(player3, 2, {top:"300px", delay:1.9});
}