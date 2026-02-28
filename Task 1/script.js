let sidebar = document.getElementById("sidebar");
let toggleBtn = document.getElementById("toggleBtn");
let icon = document.getElementById("toggleIcon");
let closeBtn = document.querySelector(".closeSidebar");

toggleBtn.onclick = function () {

    if (window.innerWidth <= 768) {
        sidebar.classList.toggle("open");
    } 
    else {
        sidebar.classList.toggle("closed");
    }

}

/* CLOSE WITH CROSS */

closeBtn.onclick = function(){

    sidebar.classList.add("closed");

}