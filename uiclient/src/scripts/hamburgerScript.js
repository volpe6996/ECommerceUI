const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const navItem1 = document.querySelector('.nav-link1');
const navItem2 = document.querySelector('.nav-link2');
const navItem3 = document.querySelector('.nav-link3');
const navItem4 = document.querySelector('.nav-link4');

const handleClick = () => {
hamburger.classList.toggle('hamburger--active');
nav.classList.toggle('navigation--active');
};

hamburger.addEventListener('click', handleClick);
navItem1.addEventListener('click', handleClick);
navItem2.addEventListener('click', handleClick);
navItem3.addEventListener('click', handleClick);
navItem4.addEventListener('click', handleClick);