// for dynamic year
function getCurrentYear() {
    return new Date().getFullYear(); // returns the year via local timing
};

document.getElementById("year").innerHTML = getCurrentYear();

// auto-typed
var typed = new Typed('.auto-typed', {
    strings: ["Software Developer", "Food connoisseur", "Ukulele player", "Dancer"],
    typeSpeed: 125,
    backSpeed: 125,
    loop: true
});

// Event listener for scroll
window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            currentSection = id;
        }
    });

    // Remove 'active' class from all links
    navLinks.forEach(links => {
        links.classList.remove('active');
    });

    // Add 'active' class to the corresponding link
    document.querySelector('header nav a[href="#' + currentSection + '"]').classList.add('active');
});

