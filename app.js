const overlay = document.querySelector(".overlay")
const modal = document.querySelector('.modal')
const btn = document.querySelector('.btn')
const closeBtn = document.querySelector('.modal__footer__button')
const closeSvg = document.querySelector('.modal__close')


function openModal() {

    btn.addEventListener('click', () => {
        overlay.classList.toggle('visible')
        btn.classList.toggle('hidden')
        modal.classList.toggle('visible')
    })
}

function closeModal(event) {
    event.addEventListener('click', () => {
        overlay.classList.toggle('visible')
        btn.classList.toggle('hidden')
        modal.classList.toggle('visible')
    })
}

openModal()

closeModal(closeBtn)
closeModal(overlay)
closeModal(closeSvg)

