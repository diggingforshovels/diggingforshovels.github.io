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
      // Mute all videos by default
      allVideos.forEach((v) => {
        v.muted = true;
      });
      // Set all button values to "Unmute"
      document.querySelectorAll('.mute-toggle').forEach((b) => {
        b.textContent = "Unmute";
      });

      // Unmute ONLY this video and change button value
      video.muted = false;
      btn.textContent = "Mute";
    } else {
      video.muted = true;
      btn.textContent = "Unmute";
    }
  });
});

// Hamburger Menu Toggle
function toggleMenu() {
  var x = document.getElementById("nav-links-container");
  
  x.classList.toggle("open");
}

// Close Hamburger Menu after link is clicked
document.querySelectorAll('#nav-links-container a').forEach(link => {
  link.addEventListener('click', () => {
    var x = document.getElementById("nav-links-container");
    x.classList.remove("open");
  });
});