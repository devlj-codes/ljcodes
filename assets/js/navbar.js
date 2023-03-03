function initNavItems() {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li");
    window.onscroll = () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.querySelector('a').getAttribute('href') === '#' + current) {
                li.classList.add("active");
            }
        });
    };
}

export const initNavbar = () => {
    initNavItems();
}



document.querySelector('.navbar-toggler').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navbar-collapse').classList.add('show');
});

document.querySelector('.navbar-nav a').addEventListener('click', function() {
    document.querySelector('.navbar-collapse').classList.remove('show');
});