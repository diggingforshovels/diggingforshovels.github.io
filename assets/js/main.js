/**
 * @copyright 2026 Digging for Shovels. All rights reserved.
 * @author Richard Pinegar | Rich Pin Software
 * @link https://richpinsoftware.com
 * @date March 2026
 * @description Main site logic for handling video synchronization and link interactions.
 * @version 3.0
 */

// Navigation Elements
const main = document.querySelectorAll('main');
const navButton = document.querySelector('.nav-button');
const ul = document.getElementById('navigation_dropdown');
const a = document.querySelectorAll('#navigation_dropdown a');
// Video Elements
const allButtons = document.querySelectorAll('.mute-toggle');
const allVideos = document.querySelectorAll('.video');
const allPlayers = document.querySelectorAll('.player');
const buttonValue = document.querySelector('.mute-toggle').textContent;

/**
 * 
 * Toggle Navigation Menu
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
 * Toggle Video Mute Button
 * 
 */
allVideos.forEach((video) => {
  const button = video.querySelector('.mute-toggle');
  const player = video.querySelector('.player');

  button.addEventListener('click', () => {
    if (player.muted) {
      // Reset all to default muted
      allPlayers.forEach((p) => {
        p.muted = true;
      });
      // Reset all to default button value
      allButtons.forEach((b) => {
        b.classList.remove('active');
        b.textContent = buttonValue;
      });
      // Unmute player and set button value
      player.muted = false;
      button.classList.toggle('active');
      button.textContent = "Mute";
    } else { // Mute player and reset button value
      player.muted = true;
      button.classList.remove('active');
      button.textContent = buttonValue;
    }
  });
});