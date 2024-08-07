// Set the delay in seconds
const delayInSeconds = 0.3;

// Get the link element with the ID "delayed-link"
const delayedLink = document.getElementById('delayed-link');

// Check if the element exists
if (delayedLink) {
  // Add a click event listener to the link
  delayedLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Get the redirect URL from the link's href attribute
    const redirectUrl = delayedLink.href;

    // Create a timeout to redirect after the specified delay
    setTimeout(() => {
      window.location.href = redirectUrl;
    }, delayInSeconds * 1000);
  });
}
