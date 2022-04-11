type row = Array<string | number | undefined>
type board = row[]

const distributeTiles = (width: number, height: number, tiles: Array<string | number | undefined>): board => {
    const board: board = []
    for (let i = 0; i < height; i++) {
        board.push([])
        for (let j = 0; j < width; j++) {
            board[i].push(tiles.pop())
        }
    }
    return board
}

export default distributeTiles
