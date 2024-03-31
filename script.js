let text = document.getElementById('text');
let background = document.getElementById('Background');
let midground1 = document.getElementById('midground1');
let midground2 = document.getElementById('midground2');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');
let hills1 = document.getElementById('hills1');
let hills2 = document.getElementById('hills2');
let foreground1 = document.getElementById('foreground1');
const logoSVG = document.getElementById('logo-svg');
const circularLogo = document.getElementById('circular-logo');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    // Adjust the maximum scroll value based on the content height
    let maxScroll = document.body.offsetHeight - window.innerHeight;
    
    // Calculate the scroll percentage
    let scrollPercent = value / maxScroll;
    
    // Limit the scroll percentage to a maximum of 1
    scrollPercent = Math.min(scrollPercent, 1);
    
    // Update the parallax elements based on the scroll percentage
    background.style.transform = `translateY(${scrollPercent * -100}%)`;
    
    mountain1.style.transform = `translate(${scrollPercent * -70}%, ${scrollPercent * -170}%)`;

    mountain2.style.transform = `translate(${scrollPercent * -50}%, ${scrollPercent * 50}%)`;

    hills1.style.transform = `translate(${scrollPercent * -20}%, ${scrollPercent * -180}%)`;

    midground2.style.transform = `translate(${scrollPercent * 40}%, ${scrollPercent * -60}%)`;

    midground1.style.transform = `translate(${scrollPercent * -10}%, ${scrollPercent * -40}%)`;

    hills2.style.transform = `translate(${scrollPercent * -90}%, ${scrollPercent * -6}%)`;

    foreground1.style.transform = `translate(${scrollPercent * 100}%, ${scrollPercent * 1}%)`;
    
  // Fade out the SVG logo on scroll
  const scrollPosition = window.scrollY;
  const fadeOutDistance = 500; // Adjust this value to control the fade-out distance

  if (scrollPosition > fadeOutDistance) {
    logoSVG.style.opacity = 0;
    circularLogo.style.opacity = 1;
  } else {
    const opacity = 1 - scrollPosition / fadeOutDistance*2;
    logoSVG.style.opacity = opacity;
    circularLogo.style.opacity = 1 - opacity;
  }
});

const logoLink = document.getElementById('logo-link');

logoLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});




// Staggered scroll animation
const scrollItems = document.querySelectorAll('.scroll-item');
const servicesBackground1 = document.querySelector('.services-background-1');
const servicesBackground2 = document.querySelector('.services-background-2');
const services = document.querySelector('.services');

const staggerAnimation = () => {
    scrollItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const itemBottom = item.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        const isOddRow = Math.floor(index / 3) % 2 !== 0;

        if (itemTop < windowHeight * 0.8) {
            item.classList.remove(isOddRow ? 'animate-out-right' : 'animate-out-left');
            item.classList.add(isOddRow ? 'animate-in-right' : 'animate-in-left');
            item.style.animationDelay = `${index % 3 * 0.2}s`;
        } else if (itemBottom > windowHeight * 1.2) {
            item.classList.remove(isOddRow ? 'animate-in-right' : 'animate-in-left');
            item.classList.add(isOddRow ? 'animate-out-right' : 'animate-out-left');
            item.style.animationDelay = `${index % 3 * 0.2}s`;
        }
    });

    const servicesTop = services.getBoundingClientRect().top;
    const servicesBottom = services.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (servicesTop < windowHeight * 0.8) {
        servicesBackground1.classList.add('animate-in');
        servicesBackground2.classList.add('animate-in');
    } else if (servicesBottom > windowHeight * 1.2) {
        servicesBackground1.classList.remove('animate-in');
        servicesBackground2.classList.remove('animate-in');
    }
};

window.addEventListener('scroll', staggerAnimation);

const navigationLinks = document.querySelectorAll('.navigation a');

navigationLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  navigationLinks.forEach(link => {
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const sectionTop = targetSection.offsetTop -400;
    const sectionHeight = targetSection.offsetHeight;

    if (targetId === '#contact') {
      const contactOffset = 50; // Adjust this value as needed
      if (scrollPosition >= sectionTop - contactOffset) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    } else {
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});