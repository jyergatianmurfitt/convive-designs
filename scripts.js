//Navbar//
function toggleDropdown() {
  let navbarToggle = document.getElementById('navbar-toggle');
  if (navbarToggle.className === 'topNav') {
    navbarToggle.className += ' responsive';

  } else {
    navbarToggle.className = 'topNav';
  }
}

//OnLoad Animations//
const animateHome = () => {
  const homeContainer = document.querySelector('.header-container');

  setTimeout(function(){
      homeContainer.style.opacity = '1';
  }, 0);
}

//Scroll Animations//
const scrollElements = document.querySelectorAll(".scroll");

const elementInView = (el, scrollOffset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    }
  })
}

setTimeout(function(){
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })
}, 0);
