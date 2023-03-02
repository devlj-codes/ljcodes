export const initAnimation = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                if (entry.target.tagName === 'H1' && !document.querySelector('.navigation').classList.contains('d-none')) {
                    document.querySelector('.navigation').classList.add('d-none');
                }
            } else {
                entry.target.classList.remove('animated');
                if (entry.target.tagName === 'H1' && document.querySelector('.navigation').classList.contains('d-none')) {
                    document.querySelector('.navigation').classList.remove('d-none');
                }
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