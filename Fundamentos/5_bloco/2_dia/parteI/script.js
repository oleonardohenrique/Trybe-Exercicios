let element = document.getElementById('elementoOndeVoceEsta')

let pai = element.parentElement

pai.style.color = 'red'

let child = element.firstElementChild
child.innerText = 'Texto adicionado'

let firstChild = pai.firstElementChild

let firstChild2 = element.previousElementSibling

let text = element.nextSibling

let thirdChild = element.nextElementSibling

let thirdChild2 = pai.lastElementChild.previousElementSibling