let sidebar = document.getElementById("sidebar");
let toggleBtn = document.getElementById("toggleBtn");
let icon = document.getElementById("toggleIcon");

toggleBtn.onclick = function () {

    if (window.innerWidth <= 768) {
        sidebar.classList.toggle("open");
    } 
    else {
        sidebar.classList.toggle("closed");
    }

    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } 
    else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

};