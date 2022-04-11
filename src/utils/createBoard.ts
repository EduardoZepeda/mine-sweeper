import addAdjacentBombsNumber from './addAdjacentBombsNumber'
import createTiles from './createTiles'
import distributeTiles from './distributeTiles'

type row = Array<string | number | undefined>
type board = row[]

const createBoard = (width: number, height: number, bombs: number): board => {
  const tiles = createTiles(width * height, bombs)
  const board = distributeTiles(width, height, tiles)
  addAdjacentBombsNumber(board)
  return board
}

export default createBoard
