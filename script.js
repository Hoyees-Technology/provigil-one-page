const navLinks = document.getElementById('navLinks');
const showBtn = document.getElementById('showBtn');
const hideBtn = document.getElementById('hideBtn');

const showMenu = () => {
    navLinks.style.top = '0px';
}

const hideMenu = () => {
    navLinks.style.top = '-100vh'; // Adjusted to move the menu off-screen
}

showBtn.addEventListener('click', showMenu);
hideBtn.addEventListener('click', hideMenu);