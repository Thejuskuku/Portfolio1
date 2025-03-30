let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        }
    });
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
}

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxInfo = document.getElementById('lightbox-info');
const closeBtn = document.querySelector('.close-btn');
const worksBoxes = document.querySelectorAll('.works-box');

// Close lightbox when clicking the close button or outside the image
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Open lightbox - modified to handle event propagation
worksBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
        // Don't open lightbox if clicking on a link
        if (e.target.closest('a')) return;
        
        const img = box.querySelector('img');
        const title = box.querySelector('h4');
        const description = box.querySelector('p');
        const links = box.querySelector('.works-links');
        
        if (img && title && description && links) {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxInfo.querySelector('h3').textContent = title.textContent;
            lightboxInfo.querySelector('p').textContent = description.textContent;
            lightboxInfo.querySelector('.lightbox-links').innerHTML = links.innerHTML;
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});