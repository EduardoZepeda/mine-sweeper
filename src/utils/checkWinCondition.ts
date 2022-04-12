import { board } from '../context/gameState'

const checkWinCondition = (board: board, bombs: number) => {
    let revealedTiles: number = 0
    board.forEach(row => row.forEach(tile => { if (tile.isClicked) { revealedTiles++ } }))
    return revealedTiles >= (board.length * board[0].length - bombs)
}

export default checkWinCondition