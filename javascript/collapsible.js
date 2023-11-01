// on load
window.addEventListener("load", function () {
    let i = 0;
    let collapsibles = document.getElementsByClassName("collapsible");

    while (i < collapsibles.length) {
        collapsibles[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight) content.style.maxHeight = null;
            else content.style.maxHeight = `${content.scrollHeight}px`;
        });
        ++i;
    };
});