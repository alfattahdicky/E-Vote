import '../style.css';

const detailProfileElement = document.getElementById('detailProfile');
const profile = document.getElementById('profile');
const main = document.querySelector('main');
const toggle = document.getElementById('hamburger');
const navList = document.getElementById('navList');
const askEl = document.querySelectorAll('.ask');


function showContent() {
  const loader = document.getElementById('loader');
  console.log(loader);
  window.addEventListener('load', function () {
    loader.classList.add('hidden');
    loader.parentElement.classList.remove('z-50');
  });
}

showContent();

function showDetailProfile() {
  if (detailProfileElement.classList.contains('lg:opacity-0')) {
    detailProfileElement.classList.replace('lg:opacity-0', 'lg:opacity-100');
  } else {
    hiddenDetailProfile();
  }
}
function showNavbar() {
  if (navList.classList.contains('opacity-0')) {
    navList.classList.replace('translate-x-full', 'translate-x-0');
    navList.classList.replace('opacity-0', 'opacity-100');
  } else {
    hiddenNavbar();
  }
}

function hiddenDetailProfile() {
  detailProfileElement.classList.replace('lg:opacity-100', 'lg:opacity-0');
}

function hiddenNavbar() {
  navList.classList.replace('translate-x-0', 'translate-x-full');
  navList.classList.replace('opacity-100', 'opacity-0');
}

profile.addEventListener('click', showDetailProfile);
main.addEventListener('click', function () {
  hiddenNavbar();
  hiddenDetailProfile();
});
toggle.addEventListener('click', showNavbar);

askEl.forEach(function (el) {
  el.addEventListener('click', function () {
    let button = el.firstElementChild.lastElementChild;
    let answer = el.nextElementSibling;
    if (answer.classList.contains('hidden')) {
      answer.classList.replace('hidden', 'block');
      button.innerText = '-';
    } else {
      answer.classList.replace('block', 'hidden');
      button.innerText = '+';
    }
  })
})
