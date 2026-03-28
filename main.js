/**
 * Main Site Logic
 * @copyright 2026 Richard Pinegar | Rich Pin Software
 * @author Richard Pinegar | Rich Pin Software
 * @description Main site logic for handling video synchronization and link interactions.
 * @version 3.0
 */

// Navigation Elements
const main = document.querySelectorAll('main');
const navButton = document.querySelector('.nav-button');
const ul = document.getElementById('navigation_dropdown');
const li = document.querySelectorAll('#navigation_dropdown li');
const a = document.querySelectorAll('#navigation_dropdown a');
// CSS Styles
const rootElement = document.documentElement;
const cssStyles = window.getComputedStyle(rootElement);
const clrPrimary = cssStyles.getPropertyValue("--color-primary");
const clrShade = cssStyles.getPropertyValue("--color-shade");
const clrShadeLight = cssStyles.getPropertyValue("--color-shade-light");
const clrSecondary = cssStyles.getPropertyValue("--color-secondary");
const clrAlt = cssStyles.getPropertyValue("--color-alt");
const clrDark = cssStyles.getPropertyValue("--color-dark");
const clrFontDark = cssStyles.getPropertyValue("--color-font-dark");
const clrLight = cssStyles.getPropertyValue("--color-light");
const clrFontLight = cssStyles.getPropertyValue("--color-font-light");
// Video Elements
const allbuttons = document.querySelectorAll('.mute-toggle');
const allVideos = document.querySelectorAll('.video');
const allPlayers = document.querySelectorAll('.player');

/**
 * 
 * Toggle Menu
 * 
 */
function toggleMenu() {
  var isActive = navButton.classList.contains('active');

  if(!isActive) {
    // Toggle ON
    navButton.classList.toggle('active');
    ul.classList.toggle('active');
    // Update the ARIA attribute for accessibility
    navButton.setAttribute('aria-expanded', true);
  } else if(isActive) {
    // Toggle OFF
    navButton.classList.remove('active');
    ul.classList.remove('active');
    // Update the ARIA attribute for accessibility
    navButton.setAttribute('aria-expanded', false);
  }
}

// Close menu after a link is selected
a.forEach(link => { 
  link.addEventListener('click', () => {
    navButton.classList.remove('active');
    ul.classList.remove('active');
    // Update the ARIA attribute for accessibility
    navButton.setAttribute('aria-expanded', false);
  });
});

// Close menu after clicking anywhere on the page
main.forEach(element => {
  element.addEventListener('click', () => {
    var isActive = ul.classList.contains('active');

    if(isActive) {
      navButton.classList.remove('active');
      ul.classList.remove('active');
      // Update the ARIA attribute for accessibility
      navButton.setAttribute('aria-expanded', false);
    }
  });
});

/**
 * 
 * Play Video Automatically & Mute/Unmute Button
 * 
 */

// Video mute by default on site load
allVideos.forEach((container) => {
  const button = container.querySelector('.mute-toggle');
  const player = container.querySelector('.player');

  button.addEventListener('click', () => {
    if (player.muted) {
      // Mute all videos by default
      allPlayers.forEach((p) => {
        p.muted = true;
      });
      // Set all button values to "Unmute"
      allbuttons.forEach((b) => {
        b.textContent = "Unmute";
        // b.style.backgroundColor = clrShade;
      });
      // Toggle "Unmute" and update button value
      player.muted = false;
      button.textContent = "Mute";
      // button.style.backgroundColor = clrAlt;
      // button.style.color = clrFontDark;
    } else {
      player.muted = true;
      button.textContent = "Unmute";
      // button.style.backgroundColor = clrShade;
      // button.style.color = clrFontLight;
    }
  });
});