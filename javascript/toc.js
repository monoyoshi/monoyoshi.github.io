// table of contents toggle
function toggleTOC() {
    let contents = document.getElementById("toc-contents");
    var button = document.getElementById("toc-button");
    if (button.innerHTML == "hide") {
        contents.style.display = "none";
        button.innerHTML = "show";
    }
    else {
        contents.style.display = "block";
        button.innerHTML = "hide";
    };
}