import '@material/web/all.js';



const introElement = document.getElementById('intro');
  if (introElement) {
    introElement.classList.add('previously-visible');
};

// Rest of your existing code...

document.addEventListener('click', function(event) {
    // Check if clicked element is an md-primary-tab
    if (event.target.matches('md-primary-tab')) {
      const clickedTab = event.target;
  
      // Check if the md-primary-tab has a TAB property that's a string
      if (clickedTab.hasAttribute('TAB') && typeof clickedTab.getAttribute('TAB') === 'string') {
        const targetId = clickedTab.getAttribute('TAB');
  
        // Find element with the target ID
        const targetElement = document.getElementById(targetId);
  
        // Function to handle transitions (modified to handle both show and hide)
        const handleTransition = (element, show) => {
          element.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'; // Set transition properties
  
          if (show) {
            element.style.opacity = 1;
            element.style.transform = 'scale(1)';
          } else {
            element.style.opacity = 0;
            element.style.transform = 'scale(0)';
          }
  
          // Set visibility and position after transition
          setTimeout(() => {
            element.style.visibility = show ? 'visible' : 'hidden';
            element.style.position = show ? 'relative' : 'absolute';
            element.style.transition = ''; // Reset transition after animation
          }, 300); // Adjust timeout based on transition duration
        };
  
        // Handle hiding previously visible element
        const previousVisibleElement = document.querySelector('.previously-visible');
        const containerElements = document.querySelectorAll('.container');
        if (previousVisibleElement) {
          handleTransition(previousVisibleElement, false);
          previousVisibleElement.classList.remove('previously-visible');
        }
  
        if (previousVisibleElement) {
            handleTransition(previousVisibleElement, false);
            previousVisibleElement.classList.remove('previously-visible');
        }
  
  // Handle container elements
  containerElements.forEach(containerElement => {
    handleTransition(containerElement, false);
    containerElement.classList.remove('previously-visible'); // Assuming you want to remove the class if present
  });
  
        // Show the target element based on the clicked tab's TAB property
        if (targetElement) {
          // Check if target element is directly parented by the body
          if (targetElement.parentNode === document.body) {
            handleTransition(targetElement, true); // Use handleTransition for showing too
            targetElement.classList.add('previously-visible'); // Mark currently visible element
          } else {
            console.warn('Clicked md-primary-tab references an element not directly parented by body:', targetId);
          }
        } else {
          console.warn('Clicked md-primary-tab references a non-existent ID: ', targetId);
        }
      } else {
        console.warn('Clicked md-primary-tab is missing a TAB property or the TAB property is not a string.');
      }
    }
  });




