// burger menu
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

// Header scroll
window.onscroll = function () {scrollFunction()};

const nav = document.querySelector(".navbar");
const logo = document.querySelector(".logo");

function scrollFunction() {

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        nav.style.height = "55px";
        logo.style.height = "45px";
        logo.style.marginLeft = "2em";

        
    } else {
        nav.style.height = "";
        logo.style.height = "";
        logo.style.marginLeft = "";
        
    }
}