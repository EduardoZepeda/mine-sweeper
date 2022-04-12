import getAdjacentTiles from './getAdjacentTiles'
import { board } from '../context/gameState'

const addAdjacentBombsNumber = (board: board): board => {
  const boardWidth = board[0].length
  const boardHeight = board.length
  for (let x = 0; x < boardHeight; x++) {
    for (let y = 0; y < boardWidth; y++) {
      if (board[x][y]?.isBomb) {
        const adjacentTiles = getAdjacentTiles([x, y])
        const validCoordenates = adjacentTiles.filter(coordinate => coordinate[0] >= 0 && coordinate[0] < boardHeight && coordinate[1] >= 0 && coordinate[1] < boardWidth)
        for (const coordinate of validCoordenates) {
          if (typeof board[coordinate[0]][coordinate[1]]?.adjacentBombs === 'number') {
            board[coordinate[0]]![coordinate[1]]!.adjacentBombs++ as number
          }
        }
      }
    }
  }
  return board
}
export default addAdjacentBombsNumber
