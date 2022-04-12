import { board, tile } from '../context/gameState'


const distributeTiles = (width: number, height: number, tiles: Array<tile>): board => {
    const board: board = []
    for (let i = 0; i < height; i++) {
        board.push([])
        for (let j = 0; j < width; j++) {
            board[i].push(tiles.pop() as tile)
        }
    }
    return board
}

export default distributeTiles
