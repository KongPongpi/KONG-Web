(function() {

    const links = document.querySelectorAll('a[href*="#"]');
    const headerHeight = document.querySelector('header.navbar').clientHeight;

    function scrollToTarget(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    links.forEach(link => link.addEventListener('click', scrollToTarget));

})();

(function() {

    const sections = document.querySelectorAll('.sections>section:not(#introduce)');
    let lastTarget = null;

    document.addEventListener('scroll', () => {
        if (lastTarget) {
            lastTarget.classList.remove('navbarlink--active');
        }
        lastTarget = null;

        for (section of sections) {
            if (section.getBoundingClientRect().top <= 0) {
                lastTarget = document.querySelector(a[href="#${section.getAttribute('id')}"]);
            }
        }

        if (lastTarget) {
            lastTarget.classList.add('navbarlink--active');
        }
    });


})();

// Smooth Scrolling function
const links = document.querySelectorAll(".nav-ul li a");

for (const link of links) {
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}