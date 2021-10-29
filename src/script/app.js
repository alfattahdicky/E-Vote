const detailProfileElement = document.getElementById('detailProfile');
const profile = document.getElementById('profile');
const main = document.getElementById('main');
const toggle = document.getElementById('hamburger');
const navList = document.getElementById('navList');


function showDetailProfile() {
  if (detailProfileElement.classList.contains('lg:opacity-0')) {
    detailProfileElement.classList.replace('lg:opacity-0', 'lg:opacity-100');
  } else {
    hiddenDetailProfile();
  }
}
function showNavbar() {
  if (navList.classList.contains('opacity-0')) {
    navList.classList.replace('translate-x-16', 'translate-x-0');
    navList.classList.replace('opacity-0', 'opacity-100');
  } else {
    hiddenNavbar();
  }
}

function hiddenDetailProfile() {
  detailProfileElement.classList.replace('lg:opacity-100', 'lg:opacity-0');
}

function hiddenNavbar() {
  navList.classList.replace('translate-x-0', 'translate-x-16');
  navList.classList.replace('opacity-100', 'opacity-0');
}

profile.addEventListener('click', showDetailProfile);
main.addEventListener('click', function () {
  hiddenNavbar();
  hiddenDetailProfile();
});
toggle.addEventListener('click', showNavbar)



console.log('hello')