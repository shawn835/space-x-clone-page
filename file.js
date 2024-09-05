const hamburger = document.getElementById('open-menu')
const show = document.getElementById('mobile-show')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('closed')
    show.classList.toggle('show-mobile')
})


