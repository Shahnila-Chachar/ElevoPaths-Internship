let sidebar = document.getElementById("sidebar");
let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.onclick = function(){
    if(window.innerWidth <= 768){
        // Mobile: slide in/out
        sidebar.classList.toggle("open");
    } else {
        // Desktop: collapse/expand
        sidebar.classList.toggle("closed");
    }
}