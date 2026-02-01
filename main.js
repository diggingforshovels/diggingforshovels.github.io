const containers = document.querySelectorAll('.video');
const allVideos = document.querySelectorAll('.video-player');

containers.forEach((container) => {
  const btn = container.querySelector('.mute-toggle');
  const video = container.querySelector('.video-player');

  btn.addEventListener('click', () => {
    if (video.muted) {
      // 1. Mute ALL videos first
      allVideos.forEach((v) => {
        v.muted = true;
      });
      // 2. Reset ALL buttons to say "Unmute"
      document.querySelectorAll('.mute-toggle').forEach((b) => {
        b.textContent = "Unmute";
      });

      // 3. Unmute ONLY this video and change its button
      video.muted = false;
      btn.textContent = "Mute";
    } else {
      // If user clicks "Mute" on the currently playing video
      video.muted = true;
      btn.textContent = "Unmute";
    }
  });
});


/*const video = document.getElementById('myVideo');
const btn = document.getElementById('unmuteBtn');

btn.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    btn.textContent = "Mute";
  } else {
    video.muted = true;
    btn.textContent = "Unmute";
  }
});*/

// Used to toggle the menu on small screens when clicking on the menu button
/*function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}*/