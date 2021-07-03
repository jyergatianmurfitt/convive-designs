function toggleDropdown() {
  let navbarToggle = document.getElementById('navbar-toggle');
  if (navbarToggle.className === 'topNav') {
    navbarToggle.className += ' responsive';

  } else {
    navbarToggle.className = 'topNav';
  }
}
