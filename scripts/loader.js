window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    // Delay before adding the class
    const delay = 200; // Adjust the delay in milliseconds as needed
  
    setTimeout(() => {
      loader.classList.add("loader--hidden");
    }, delay);
  
    window.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  