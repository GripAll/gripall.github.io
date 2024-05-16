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
});
