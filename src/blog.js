// Get the modal
const modal = document.getElementById('modal')

// Get the button that opens the modal

// // Get the <span> element that closes the modal
// var span1 = document.getElementsByClassName('close')[0]

function openModal(e) {
    stuff = e.target.parentElement
    console.log(stuff)
    let title = stuff.children[0].children[1].innerText
    let text = stuff.children[1].innerText
    let h = modal.getElementsByTagName('h1')[0]
    let p = modal.getElementsByTagName('p')[0]
    modal.style.display = 'flex'
    h.textContent = title
    p.textContent = text
}

function closeModal() {
    modal.style.display = 'none'
}

const btns = document.getElementsByClassName('open-modal')

for (let index = 0; index < btns.length; index++) {
    const btn = btns[index]
    btn.addEventListener('click', openModal)
}

//     .forEach((btn) => {
// })
// When the user clicks the button, open the modal
// /?/ btn1.onclick = function () {
//     modal.style.display = 'block'
// }

const close = document.getElementById('close')
close.addEventListener('click', closeModal)
