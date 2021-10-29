import '../style.css';

const navMobile = document.getElementById('mobileMenu');
const navList = document.getElementById('navList');
const main = document.querySelector('main');

function showNav() {
  if (navList.classList.contains('-translate-x-full')) {
    navList.classList.replace('-translate-x-full', '-translate-x-0')
  } else {
    navList.classList.replace('-translate-x-0', '-translate-x-full')
  }
}

navMobile.addEventListener('click', showNav)

main.addEventListener('click', function () {
  navList.classList.replace('-translate-x-0', '-translate-x-full')
})