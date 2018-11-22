var vid = document.getElementById("vidplayer");
var ovl = document.getElementById("vidOverlay");

document.getElementById("playButton").addEventListener("click",
	function(e) {
		var btnIcon = e.currentTarget.getElementsByTagName("img")[0];

		if (vid.paused) {
			vid.play();
			btnIcon.src = "pausebutton1.svg";
		} else {
			vid.pause();
			btnIcon.src = "playbutton1.svg";
		}
	}
);