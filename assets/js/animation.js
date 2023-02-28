export const initAnimation = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            } else {
                entry.target.classList.remove('animated');
            }
        });
    });

    const animateEls = document.querySelectorAll('.animate');
    animateEls.forEach((el) => { observer.observe(el) });
}

export const animate = (animate, el) => {
    switch (animate) {
        case 'slide-up':

            break;
        case 'slide-down':
            break;
        case '':
            break;
    }
}