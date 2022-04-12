import { useContext } from 'react'
import styles from '../Main.module.css'
import { GameStateContext, coordinate } from '../context/gameState'
import getAdjacentZeroes from '../utils/getAdjacentZeroes'
import checkWinCondition from '../utils/checkWinCondition'

interface tileProps {
    isClicked: boolean
    isBomb: boolean
    isMarked: boolean
    adjacentBombs: number
    coordinateX: number
    coordinateY: number
}

const Tile = ({ isBomb, isClicked, isMarked, adjacentBombs, coordinateX, coordinateY }: tileProps): JSX.Element => {
    const { gameState, setGameState } = useContext(GameStateContext)

    const handleRightClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        event.preventDefault()
        if (gameState.gameStatus === 'lost') {
            return
        }
        if (!isClicked) {
            const sumOrRest = isMarked ? -1 : 1
            setGameState({
                ...gameState,
                flags: gameState.flags + sumOrRest,
                board: gameState.board.map((row, indexBoard) => row.map((tile, indexRow) => {
                    if (coordinateX === indexBoard && coordinateY === indexRow) {
                        return { ...tile, isMarked: !tile.isMarked }
                    }
                    return tile
                }))
            })
        }
    }

    const handleClick = (): void => {
        // If game finished do nothing
        if (gameState.gameStatus === 'lost' || isMarked || isClicked) {
            return
        }
        // if a no bomb tile is clicked, show the adjacent number of bombs
        if (!isBomb) {
            const newBoard = gameState.board.map((row, indexBoard) => row.map((tile, indexRow) => {
                if (coordinateX === indexBoard && coordinateY === indexRow) {
                    return { ...tile, isClicked: true }
                }
                return tile
            }))
            setGameState({
                ...gameState,
                revealedTiles: gameState.revealedTiles + 1,
                gameStatus: checkWinCondition(newBoard, gameState.bombs) ? 'won' : gameState.gameStatus,
                board: newBoard
            })
        }

        // if a bomb is clicked, show all other bombs and end the game
        if (isBomb) {
            setGameState({
                ...gameState,
                gameStatus: 'lost',
                board: gameState.board.map((row) => row.map((tile) => {
                    if (tile.isBomb) {
                        return { ...tile, isClicked: true }
                    }
                    return tile
                }))
            })
        }
        if (adjacentBombs === 0 && !isBomb) {
            const adjacentZeroes = getAdjacentZeroes([coordinateX, coordinateY], gameState.board)
            const newBoard = gameState.board.map((row, x) => row.map((tile, y) => {
                if (adjacentZeroes.some((zeroCoordinate: coordinate) => zeroCoordinate[0] === x && zeroCoordinate[1] === y)) {
                    return { ...tile, isClicked: true }
                }
                return tile
            }))
            console.log(newBoard)
            setGameState({
                ...gameState,
                gameStatus: checkWinCondition(newBoard, gameState.bombs) ? 'won' : gameState.gameStatus,
                board: newBoard
            })
        }
    }

    const content = isClicked ? (isBomb ? '💣' : adjacentBombs) : (isMarked ? "🚩" : null)

    return (
        <div onContextMenu={handleRightClick} onClick={handleClick} className={styles.tile}>{content}</div>
    )
}

export default Tile
