/**
 * Main Site Logic
 * Handles video synchronization and link interactions.
 * * @author [Richard Pinegar | Rich Pin Software]
 * * @version 1.1.0
 */

const rootElement = document.documentElement;
const cssStyles = window.getComputedStyle(rootElement);
const bgPrimary = cssStyles.getPropertyValue("--bg-primary");
const bgSecondary = cssStyles.getPropertyValue("--bg-secondary");
const bgSecondaryAlt = cssStyles.getPropertyValue("--bg-secondary-alt");
const bgLow = cssStyles.getPropertyValue("--bg-low");
const bgLight = cssStyles.getPropertyValue("--bg-light");
const navLinks = document.querySelectorAll('#nav-links a');
const video = document.querySelectorAll('.video');
const videoPlayer = document.querySelectorAll('.video-player');

var nl = document.getElementById("nav-links");
var hl = document.getElementById("hamburger-link");

// Hamburger Navigation Menu toggle
function toggleMenu() {
  nl.classList.toggle("open")
  
  if(nl.classList.value === 'open') {
    var page = window.location.hash;
    // set Hamburger Navigation Menu color to page color
    switch(page) {
      case '#our-links':
        hl.style.color = bgPrimary;
        break;
      case '#music':
        hl.style.color = bgSecondary;
        break;
      case '#meet-the-band':
        hl.style.color = bgSecondaryAlt;
        break;
      case '#contact-us':
        hl.style.color = bgLow;
        break;
      default:
        hl.style.color = bgPrimary;
    }
  } else {
    hl.style.color = bgLight;
  }
}

// Set link color to page color on mouseover and reset on mouseout
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    var page = window.location.hash;
    switch(page) {
      case '#our-links':
        link.style.color = bgPrimary;
        console.log(page);
        break;
      case '#music':
        link.style.color = bgSecondary;
        break;
      case '#meet-the-band':
        link.style.color = bgSecondaryAlt;
        break;
      case '#contact-us':
        link.style.color = bgLow;
        break;
      default:
        link.style.color = bgPrimary;
    }
  });
  link.addEventListener('mouseout', () => {
    link.style.color = bgLight;
  });
});

// Close Hamburger Navigation Menu after link is selected
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nl.classList.remove("open");
    hl.style.color = bgLight;
  });
});

// Video mute by default on site load
video.forEach((container) => {
  const btn = container.querySelector('.mute-toggle');
  const video = container.querySelector('.video-player');

  btn.addEventListener('click', () => {
    if (video.muted) {
      // Mute all videos by default
      videoPlayer.forEach((v) => {
        v.muted = true;
      });
      // Set all button values to "Unmute"
      document.querySelectorAll('.mute-toggle').forEach((b) => {
        b.textContent = "Unmute";
      });
      // Toggle "Unmute" and update button value
      video.muted = false;
      btn.textContent = "Mute";
    } else {
      video.muted = true;
      btn.textContent = "Unmute";
    }
  });
});