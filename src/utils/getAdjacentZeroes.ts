import { GameStateContext, coordinates, coordinate, board } from '../context/gameState'
import getAdjacentTiles from './getAdjacentTiles'

const getAdjacentZeroes = (coordinate: coordinate, board: board): coordinate | coordinates | null => {
    if (board[coordinate[0]][coordinate[1]].adjacentBombs !== 0 || board[coordinate[0]][coordinate[1]].isClicked) {
        return null
    }
    const b = []
    const adjacentTiles = getAdjacentTiles(coordinate)
    const validAdjacentTiles = adjacentTiles.filter(coordinate => coordinate[0] >= 0 && coordinate[0] < board.length && coordinate[1] >= 0 && coordinate[1] < board[0].length)
    for (let validTile of validAdjacentTiles) {
        b.push(getAdjacentZeroes(validTile, board))
    }
    console.log(b)
    return null
}


export default getAdjacentZeroes