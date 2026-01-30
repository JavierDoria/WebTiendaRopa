
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


let count = 0;
const cartCount = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.product-button');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
        
        // Simple animation feedback
        cartCount.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);

        // Optional: Alert or Toast
        // alert('Producto agregado al carrito'); 
        // Better: Change button text temporarily
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Agregado';
        button.style.backgroundColor = 'var(--first-color-alt)';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.backgroundColor = 'var(--first-color)';
        }, 1500);
    });
});


const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        
        const inputs = contactForm.querySelectorAll('.contact-input');
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                valid = false;
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }
        });

        if (valid) {
            
            const button = contactForm.querySelector('button');
            const originalText = button.innerHTML;
            
            button.innerHTML = '¡Mensaje Enviado!';
            button.style.backgroundColor = '#10B981'; 
            
            
            contactForm.reset();

            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.backgroundColor = 'var(--first-color)';
            }, 3000);
        }
    });
}


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
