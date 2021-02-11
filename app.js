const openBtn = document.querySelector(".navbar-toggler");
const links = document.querySelector(".navbar-listing");

openBtn.addEventListener("click", function(){
    links.classList.toggle("show-navbar");
});