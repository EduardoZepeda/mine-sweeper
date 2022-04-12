import shuffle from './shuffle'
import { tile } from '../context/gameState'

const createTiles = (totalTiles: number, totalBombs: number): Array<tile> => {
  const bomb = {
    "isClicked": false,
    "isBomb": true,
    "isMarked": false,
    "adjacentBombs": 0
  }
  const emptyTile = {
    "isClicked": false,
    "isBomb": false,
    "isMarked": false,
    "adjacentBombs": 0
  }
  const arr: Array<tile> = new Array(totalTiles)
  // Destructure the object, otherwise we will be dealing with the same reference
  arr.fill({ ...bomb }, 0, totalBombs)
  for (let i = totalBombs; i < totalTiles; i++) {
    // Same as above
    arr[i] = { ...emptyTile }
  }
  shuffle(arr)
  return arr
}

export default createTiles
