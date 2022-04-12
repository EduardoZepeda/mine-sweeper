import { useContext } from 'react'
import { GameStateContext, tile } from '../context/gameState'
import styles from '../Main.module.css'
import Tile from './Tile'


const Board = (): JSX.Element => {
    const { gameState } = useContext(GameStateContext)
    const Board = gameState.board.map((row, coordinateX) => {
        return (

            <div key={coordinateX} className={styles.row}>
                {row.map(({ isBomb, isClicked, adjacentBombs, isMarked }, coordinateY) => {
                    return (
                        <Tile
                            key={`${coordinateX},${coordinateY}`}
                            coordinateX={coordinateX}
                            coordinateY={coordinateY}
                            isBomb={isBomb} isClicked={isClicked}
                            isMarked={isMarked}
                            adjacentBombs={adjacentBombs} />
                    )
                })}
            </div>
        )
    })
    return (
        <div>
            <h2>{gameState.finishedGame ? "Game over!" : "Be careful!"}</h2>
            <p><small>{gameState.finishedGame ? "See you space cowboy!" : "Don't explode!"}</small></p>
            {Board}
        </div>
    )
}

export default Board
