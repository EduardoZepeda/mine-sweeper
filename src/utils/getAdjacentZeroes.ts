import { coordinates, coordinate, board } from '../context/gameState'
import getAdjacentTiles from './getAdjacentTiles'
import excludeCoordinates from './excludeCoordinates'


const getAdjacentZeroes = (coordinate: coordinate, board: board): any => {
    const prohibitedCoordinates: coordinates = []
    const zeroCoordinates: coordinates = []
    // This function will use prohibited coordinates to prevent infinite recursion
    const recursiveZero = (coordinate: coordinate) => {
        // If cell has adjacent bombs, stop recursion
        if (board[coordinate[0]][coordinate[1]].adjacentBombs !== 0 && !board[coordinate[0]][coordinate[1]].isBomb) {
            zeroCoordinates.push(coordinate)
            return coordinate
        }
        const adjacentTiles = getAdjacentTiles(coordinate)
        const validCoordenates = adjacentTiles.filter(coordinate => coordinate[0] >= 0 && coordinate[0] < board.length && coordinate[1] >= 0 && coordinate[1] < board[0].length)
        // add current coordinate, otherwise it won't show
        validCoordenates.push(coordinate)
        const remainingCoordinates = excludeCoordinates(validCoordenates, prohibitedCoordinates)
        prohibitedCoordinates.push(...validCoordenates)
        prohibitedCoordinates.push(coordinate)
        // cycle only over not programmed coordinates
        for (let coord of remainingCoordinates) {
            zeroCoordinates.push(recursiveZero(coord))
        }
        return coordinate
    }
    recursiveZero(coordinate)

    return zeroCoordinates
}


export default getAdjacentZeroes