const gameBoard = (() => {
    const array =  ['', '', '', '', '', '', '', '', '']
    return {
       array
    }
})()

const player = (name) => {
    
    return {name}
}

let activePlayer = player('player1').name

const switchPlayer = () => {
    if (activePlayer == 'player1'){
        activePlayer = 'player2'
    }
    else {
        activePlayer = 'player1'
    }
}

const getMarkValue = (activePlayer) => {
    let value = ''
    if (activePlayer == 'player1'){
        value = 'X'
    }
    else{
        value = 'O'
    }
    return value
}

const available = (array, index) => {
    if (array[index] == ''){
        return true
    }
    else{
        return false
    } 
}

const display = () => {
    const boxes = document.querySelectorAll('.box')

    boxes.forEach((box, index) => {
        if (available(gameBoard.array, index)){
            box.addEventListener('click', function(){
                gameBoard.array[index] =  getMarkValue(activePlayer)
                box.textContent = gameBoard.array[index]
                checkGameOver(gameBoard.array)
                switchPlayer()
            }, {once: true})
        }
    })
}

display()

const checkGameOver = (array) => {
    if (array[0] != '' && array[0] == array[1] && array[0] == array[2]){
        alert('Game over!!!')
    }
    else if (array[3] != '' && array[3] == array[4] && array[3] == array[5]){
        alert('Game over!!!')
    }
    else if (array[6] != '' && array[6] == array[7] && array[6] == array[8]){
        alert('Game over!!!')
    }
    else if (array[0] != '' && array[0] == array[3] && array[0] == array[6]){
        alert('Game over!!!')
    }
    else if (array[1] != '' && array[1] == array[4] && array[1] == array[7]){
        alert('Game over!!!')
    }
    else if (array[2] != '' && array[2] == array[5] && array[2] == array[8]){
        alert('Game over!!!')
    }
    else if (array[0] != '' && array[0] == array[4] && array[0] == array[8]){
        alert('Game over!!!')
    }
    else if (array[2] != '' && array[2] == array[4] && array[2] == array[6]){
        alert('Game over!!!')
    }
}







