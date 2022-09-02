let father = document.getElementById('pai')
let brotherElement = document.createElement('section')
brotherElement.id = 'irmaoElementoOndeVoceEsta'
father.appendChild(brotherElement)

let element = document.getElementById('elementoOndeVoceEsta')
let childElement = document.createElement('section')
childElement.id = 'filhoElementoOndeVoceEsta'
element.appendChild(childElement)

let firstChild = document.getElementById('primeiroFilhoDoFilho')
let travou = document.createElement('section')
travou.id = 'primeiroFilhoDoFilhoDoFilho'
firstChild.appendChild(travou)

let thirdChild = travou.parentElement.parentElement.nextElementSibling

console.log(thirdChild)