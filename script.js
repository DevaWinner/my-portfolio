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

document.addEventListener('DOMContentLoaded', function () {
  var menuLinks = document.querySelectorAll('.nav-links-container a');
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
      toggleMenu();
    });
  }
});