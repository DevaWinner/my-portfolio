function toggleMenu() {
  var menuIcon = document.querySelector('.nav-icon');
  var menu = document.querySelector('.nav-links-container');

  menuIcon.classList.toggle('open');
  menu.classList.toggle('open');

  if (menuIcon.classList.contains('open')) {
    menuIcon.innerHTML = '<i class="fa fa-times fa-xl"></i>';
  } else {
    menuIcon.innerHTML = '<i class="fa fa-bars fa-xl"></i>';
  }
}
