const Player = (name) => {
    let score = 0
    
    const increaseScore = () => {
        score += 1
    }

}

const GameBoard = (() => {
    let board = [["","",""],["","",""],["","",""]]
    const getBoard = () => board
    const putToBoard = (nthsquare,xoro) => {
        let row = Math.floor(nthsquare / 3)
        let column = (nthsquare % 3)
        board[row][column] = xoro
        return board
    }
    const clearBoard = () => {
        board = [["","",""],["","",""],["","",""]]
        return
    }

    return {
        putToBoard,
        getBoard,
        clearBoard
    }

})()

const Game = (() => {
    let last_turn = "X"
    const turn = (id) => {
        GameBoard.putToBoard(Number(id),(last_turn == "X" ? "O" : "X"))
        return last_turn = last_turn == "X" ? "O" : "X"
    }
    const isOver = (board) => {
        for(let i = 0; i<3; i++) {
            let row_end = board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] != "" && board[i][1] != "" && board[i][2] != ""
            let column_end = board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] != "" && board[1][i] != "" && board[2][i] != ""
            if(row_end || column_end){
                console.log("end by row,column")
                return true
            }
        }

        if(board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] != "" && board[1][1] != "" && board[2][2] != "") {
            console.log("end by cross")
            return true
        }
        if(board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] != "" && board[1][1] != "" && board[2][0] != "") {
            console.log("end by terscross")
            return true
        }
        return false
    }
    return {
        turn,
        isOver
    }
})()


const squares = document.querySelectorAll(".square")
squares.forEach((square => {
    square.addEventListener("click", () => {
        if(square.innerHTML == "") {
            let id = square.id
            square.innerHTML = Game.turn(id)
            Game.isOver(GameBoard.getBoard())
        }
    })
}))

const reset_button = document.querySelector("#reset")
reset_button.addEventListener("click", () => {
    for(const sqr of squares) {
        sqr.innerHTML = ""
        GameBoard.clearBoard()
    }
})