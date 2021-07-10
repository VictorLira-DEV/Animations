'use-strict';
const allSections = document.querySelectorAll('.section');

const removeHiddenClass = function (entries, observer) {
    const [entry] = entries;
    console.log(entry)
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
}

const sectionObserver = new IntersectionObserver(removeHiddenClass, {
    root: null,
    threshold: 0.15
})

allSections.forEach(section => {
    sectionObserver.observe(section);
})

allSections.forEach(section => {
    section.classList.add('section--hidden')
});

//smooth navigation;
const navLinks = document.querySelector('.nav__links');

navLinks.addEventListener('click', function (e) {
    e.preventDefault();
    if (!e.target.classList.contains('nav__link')) return;
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
})