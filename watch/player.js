var vid = document.getElementById("vidplayer");
var ovl = document.getElementById("vidOverlay");

var wasPaused = true;
var progressDrag = false;

ovl.addEventListener("mouseover",
	function addFadeOutClass(e) {
		ovl.classList.add("vidOverlayFadeOut");
		ovl.removeEventListener("mouseover", addFadeOutClass);
	}
);

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

document.getElementById("progressBar").addEventListener("mousedown",
	function(e) {
		wasPaused = vid.paused;
		vid.pause();
		progressDrag = true;

		{
			var bar = document.getElementById("progressBar")
			var barLeft = bar.getBoundingClientRect().left;

			e.preventDefault();
			vid.currentTime =
				vid.duration * (e.clientX - barLeft) / bar.clientWidth;
		}
	}
);

document.addEventListener("mousemove",
	function(e) {
		if (progressDrag) {
			var bar = document.getElementById("progressBar")
			var barLeft = bar.getBoundingClientRect().left;

			e.preventDefault();
			vid.currentTime =
				vid.duration * (e.clientX - barLeft) / bar.clientWidth;
		}
	}
);

document.addEventListener("mouseup",
	function(e) {
		if (!wasPaused) {
			vid.play();
			wasPaused = true;
		}
		progressDrag = false;
	}
);

vid.addEventListener("ended",
	function(e) {
		var btnIcon = ovl.querySelector("#playButton > img");

		btnIcon.src = "playbutton1.svg";
	}
);

function progressUpdate() {
	document.getElementById("progressFill").style.width = (100.0 * vid.currentTime / vid.duration).toString() + "%";
}
window.setInterval(progressUpdate, 100);