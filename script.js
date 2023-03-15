const btn = document.querySelector('#btn')
const menuBody = document.querySelector('#menu')

btn.addEventListener('click', event =>{
    menuBody.classList.toggle('menu__body--active')
    document.body.classList.toggle('lock')
    btn.classList.toggle('menu__icon--active')
})