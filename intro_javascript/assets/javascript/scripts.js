

var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

const buttonIncrement = document.getElementById('adicionar')
const buttonDecrement = document.getElementById('subtrair')

function increment() {
    currentNumber ++
    currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
    currentNumber --
    currentNumberWrapper.innerHTML = currentNumber
}

buttonIncrement.addEventListener('click', increment)

buttonDecrement.addEventListener('click', decrement)



