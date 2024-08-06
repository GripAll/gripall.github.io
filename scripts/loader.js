

window.addEventListener("load",() => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");


    window.addEventListener("transitionend",() => {
        document.body.removeChild(loader);
    });
});