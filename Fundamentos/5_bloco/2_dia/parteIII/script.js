let father = document.getElementById('pai');
let childs = father.childNodes;

for (let cont = childs.length - 1; cont >= 0; cont -= 1) {
    let currentChild = childs[cont]
    if (currentChild.id !== 'elementoOndeVoceEsta') {
        currentChild.remove()
    }
}

let element = document.getElementById('elementoOndeVoceEsta')
element.lastElementChild.remove()
