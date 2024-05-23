import '@material/web/all.js';

import '@material/web/all.js';

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menutoggle'); // Select element with class 'menutoggle'
  const menuA = document.querySelector('.menuA'); // Select element with class 'menuA'

  let isActive = false; // Flag to track active state

  menuToggle.addEventListener('click', () => {
    isActive = !isActive; // Toggle flag on each click

    const menuPosition = getComputedStyle(menuA).position;  // Get computed style for 'position'

    if (menuPosition === 'absolute') {
      menuA.setAttribute('open', true);  // Set 'open' attribute to true only if position is absolute
      console.log('Menu A is now active (absolute positioning)!'); // Print message on activation
    } else if (menuPosition === 'relative') {
      menuA.removeAttribute('open');     // Remove 'open' attribute if position is relative
      console.log('Menu A is now inactive (relative positioning)!'); // Print message on deactivation
    } else {
      console.warn('Unexpected position value for .menuA:', menuPosition);  // Warn about unexpected position values
    }
});


  // Select all `<md-fab>` elements
  const fabElements = document.querySelectorAll('md-fab');

  // Loop through each `<md-fab>` element
  fabElements.forEach(fab => {
    fab.addEventListener('click', (event) => {
      const href = fab.getAttribute('href'); // Get the value of the 'href' attribute

      if (href) {
        const target = fab.getAttribute('target'); // Check for the 'target' attribute
        if (target === '_blank') {
          // Open the URL in a new tab (existing behavior)
          window.open(href, '_blank');
        } else {
          // Open the URL in the current tab (new behavior)
          window.location.href = href;
          // Optional: Prevent default behavior for the original click event
          event.preventDefault();
        }
      }
    });
  });
});
