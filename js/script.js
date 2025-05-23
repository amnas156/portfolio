document.addEventListener('DOMContentLoaded', () => {
const links = document.querySelectorAll("ul li a");
const current = window.location.pathname;
    links.forEach(link => {
    if (link.getAttribute("href") === current) {
        link.classList.add("active");
    }
});
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const body = document.body;

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const lines = document.querySelectorAll('.about-line');
            lines.forEach(line => {
                line.classList.remove('w-0');
                line.classList.add('w-24');
            });
            const section = document.getElementById('section');
        if(section) {
            section.classList.remove('opacity-0', 'translate-y-10');
            section.classList.add('opacity-100', 'translate-y-0');
        }
        const section1 = document.getElementById('section2');
        if(section1) {
            section1.classList.remove('opacity-0', 'translate-y-10');
            section1.classList.add('opacity-100', 'translate-y-0');
        }
        } 
        
    });
    
});

const aboutSection = document.getElementById('about');
if (aboutSection) {
    observer.observe(aboutSection);
}
});