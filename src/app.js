// navbar hamburger variables //
const burger = document.querySelector('#burger-menu')
const ul = document.querySelector('nav ul')
const nav = document.querySelector('nav')

// toggle navbar items //
burger.addEventListener('click', () => {
  ul.classList.toggle('show')
})

// close navbar items when link selected //
const navLink = document.querySelectorAll('.nav-link')

navLink.forEach((link) =>
  link.addEventListener('click', () => {
    ul.classList.remove('show')
  })
)
