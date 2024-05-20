import '@material/web/all.js';

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menutoggle'); // Select element with class 'menutoggle'
  const menuA = document.querySelector('.menuA'); // Select element with class 'menuA'

  let isActive = false; // Flag to track active state

  menuToggle.addEventListener('click', () => {
    isActive = !isActive; // Toggle flag on each click
    menuA.classList.toggle('open'); // Add/remove 'active' class

    console.log('Menu toggle clicked, isActive:', isActive); // Print current state of isActive
    
    if (isActive) {
      console.log('Menu A is now active!'); // Print message on activation
    } else {
      console.log('Menu A is now inactive!'); // Print message on deactivation
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
