const gameBoard = (() => {
    const array =  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']

    return {
       array
    }
})()


const player = (name) => {

    return {name}
}


const display = () => {
    const box = document.querySelectorAll('.box')

    let index = 0
    box.forEach(elem => {
        elem.textContent = gameBoard.array[index]
        elem.dataset.position = index
        index++

        elem.addEventListener('click', function(){
            changeArray(gameBoard.array, elem.dataset.position, 'X')
            display()
        })
    })
}

display()

const changeArray = (array, index, value) => {
    array[index] = value
}


const getValue = () => {
    
}





