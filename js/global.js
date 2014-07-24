// Global JS

window.onload = function() {
	var player1 = document.getElementById("player1");
	var player2 = document.getElementById("player2");
	var player3 = document.getElementById("player3");
	
	TweenLite.to(player1, 2, {left:"75%"});
	TweenLite.to(player1, 2, {top:"500px", delay:1.9});
	TweenLite.to(player2, 2, {left:"25%"});
	TweenLite.to(player2, 2, {top:"500px", delay:1.9});
	TweenLite.to(player3, 2, {left:"50%"});
	TweenLite.to(player3, 2, {top:"300px", delay:1.9});
}