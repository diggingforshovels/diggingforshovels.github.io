/**
 * Main Site Logic
 * Handles video synchronization and link interactions.
 * * @author [Richard Pinegar | Rich Pin Software]
 * * @version 1.1.0
 */

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

// Hamburger Menu Toggle
function toggleMenu() {
  var x = document.getElementById("myLinks");
  
  x.classList.toggle("open");
}

// Close Menu After Link is Clicked
document.querySelectorAll('#myLinks a').forEach(link => {
  link.addEventListener('click', () => {
    var x = document.getElementById("myLinks");
    x.classList.remove("open");
  });
});