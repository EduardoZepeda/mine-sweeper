import addAdjacentBombsNumber from './addAdjacentBombsNumber'
import createTiles from './createTiles'
import distributeTiles from './distributeTiles'
import { board } from '../context/gameState'


const createBoard = (width: number, height: number, bombs: number): board => {
  const createdTiles = createTiles(width * height, bombs)
  const createdBoard = distributeTiles(width, height, createdTiles)
  addAdjacentBombsNumber(createdBoard)
  return createdBoard
}

export default createBoard
