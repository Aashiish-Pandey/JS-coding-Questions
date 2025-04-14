let newDiv =document.createElement('div')
newDiv.textContent='NewDiv'
newDiv.style.backgroundColor = 'red'
newDiv.id='div1'

let container = document.getElementById('container')

container.appendChild(newDiv)

console.log('div1', document.getElementById('div1'))

// container.removeChild(newDiv)