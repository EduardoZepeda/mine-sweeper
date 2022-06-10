import { useContext } from 'react'
import { GameStateContext } from '../context/gameState'
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
            <h2>{gameState.gameStatus === 'lost' ? "Game over!" : "Be careful!"}</h2>
            <p><small>{gameState.gameStatus === 'lost' ? "See you space cowboy!" : "Don't explode!"}</small></p>
            <p>{`💣: ${gameState.bombs - gameState.flags} 🚩: ${gameState.flags}`}</p>
            {Board}
        </div>
    )
}

export default Board
