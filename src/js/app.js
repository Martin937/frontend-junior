import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

flsFunctions.showModal();

// flsFunctions.mask();


const main = document.querySelector('.main')
const sidebar = document.querySelector('.sidebar')
const plus = document.querySelector('.s-plus')
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const material = document.querySelector('.material')
const pdf = document.querySelector('.pdf')
const social = document.querySelector('.social')

plus.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar_mobile')
  if (sidebar.classList.contains("sidebar_mobile")
  ) {
    sidebar.style.bottom = '-40%'
  } else {
    sidebar.style.bottom = '0%'
  }

})
hamburger.addEventListener('click', () => {
  console.log('menu');
  nav.classList.toggle('nav_mobile')
  material.classList.toggle('material_mobile')
  pdf.classList.toggle('pdf_mobile')
  social.classList.toggle('social_mobile')
  document.body.classList.toggle('bg')
  main.classList.toggle('hide')
})






