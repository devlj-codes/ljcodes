import { initAnimation, animate } from "./animation.js";
import { initNavbar } from "./navbar.js";

initAnimation();
initNavbar();

document.querySelector('#arrowDown').addEventListener('click', function() {

    document.querySelectorAll('section.d-none').forEach((el) => {
        el.classList.remove('d-none');
    });
    document.querySelector('footer').classList.remove('d-none');
    document.querySelector('.navigation').classList.remove('d-none');
});