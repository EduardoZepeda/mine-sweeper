import shuffle from './shuffle'

const createTiles = (totalTiles: number, totalBombs: number): Array<string | number | undefined> => {
  const bomb = '💣'
  const emptyTile = 0
  const arr: Array<string | number | undefined> = new Array(totalTiles)
  arr.fill(bomb, 0, totalBombs)
  for (let i = totalBombs; i < totalTiles; i++) {
    arr[i] = emptyTile
  }
  shuffle(arr)
  return arr
}

export default createTiles
