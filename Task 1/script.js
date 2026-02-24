let sidebar = document.getElementById("sidebar");
let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.onclick = function(){

    if(window.innerWidth <= 768){
        sidebar.classList.toggle("open");
    }
    else{
        sidebar.classList.toggle("closed");
    }

};