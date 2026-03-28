/**
 * Main Site Logic
 * Handles video synchronization and link interactions.
 * * @author [Richard Pinegar | Rich Pin Software]
 * * @version 1.1.0
 */

// Navigation Elements
const main = document.querySelectorAll('main');
const navButton = document.querySelector('.nav-button');
const ul = document.getElementById('navigation_dropdown');
const li = document.querySelectorAll('#navigation_dropdown li');
const a = document.querySelectorAll('#navigation_dropdown a');
// Video Elements
const video = document.querySelectorAll('.page-video');
const videoPlayer = document.querySelectorAll('.player');
// CSS Styles
const rootElement = document.documentElement;
const cssStyles = window.getComputedStyle(rootElement);
const clrPrimary = cssStyles.getPropertyValue("--color-primary");
const clrShade = cssStyles.getPropertyValue("--color-shade");
const clrShadeLight = cssStyles.getPropertyValue("--color-shade-light");
const clrSecondary = cssStyles.getPropertyValue("--color-secondary");
const clrAlt = cssStyles.getPropertyValue("--color-alt");
const clrDark = cssStyles.getPropertyValue("--color-dark");
const clrLight = cssStyles.getPropertyValue("--color-light");
/**
 * 
 * Toggle Menu
 * 
 */

// Set hamburger button default color
navButton.style.fill = clrLight;

function toggleMenu() {
  var isActive = ul.classList.contains('active');
  
  if(!isActive) {
    // Toggle ON
    ul.classList.toggle('active');
    navButton.style.fill = clrPrimary;
    // Update the ARIA attribute for accessibility
    navButton.setAttribute('aria-expanded', true);
  } else if(isActive) {
    // Toggle OFF
    ul.classList.remove('active');
    navButton.style.fill = clrLight;
    // Update the ARIA attribute for accessibility
    navButton.setAttribute('aria-expanded', false);
  }
}

// Close menu after a link is selected
a.forEach(link => { 
  link.addEventListener('click', () => {
    ul.classList.remove('active');
    navButton.style.fill = clrLight;
  });
});

// Close menu after clicking anywhere on the page
main.forEach(element => {
  element.addEventListener('click', () => {
    var isActive = ul.classList.contains('active');

    if(isActive) {
      ul.classList.remove('active');
      navButton.style.fill = clrLight;
    }
  });
});
/**
 * 
 * Play Video Automatically & Mute/Unmute Button
 * 
 */

// Video mute by default on site load
video.forEach((container) => {
  const btn = container.querySelector('.mute-toggle');
  const video = container.querySelector('.player');

  btn.addEventListener('click', () => {
    if (video.muted) {
      // Mute all videos by default
      videoPlayer.forEach((v) => {
        v.muted = true;
      });
      // Set all button values to "Unmute"
      document.querySelectorAll('.mute-toggle').forEach((b) => {
        b.textContent = "Unmute";
        b.style.backgroundColor = clrShade;
      });
      // Toggle "Unmute" and update button value
      video.muted = false;
      btn.textContent = "Mute";
      btn.style.backgroundColor = clrPrimary;
    } else {
      video.muted = true;
      btn.textContent = "Unmute";
      btn.style.backgroundColor = clrShade;
    }
  });
});