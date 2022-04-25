const first_footer = document.querySelector(".first-footer");
const second_footer = document.querySelector(".second-footer");
const button_first = document.querySelector(".footer-share");
const button_second = document.querySelector(".footer-share__second");

button_first.addEventListener('click', function() {
    second_footer.classList.toggle("show");
}, false)

button_second.addEventListener('click', function(){
    second_footer.classList.toggle("show");
}, false)