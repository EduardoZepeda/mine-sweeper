import React, { useContext } from 'react'
import { GameStateContext, gameOption } from '../context/gameState'
import createBoard from '../utils/createBoard'
import styles from '../Main.module.css'
import CustomDifficulty from './CustomDifficulty'



const SelectBoard = () => {
    const { setGameState } = useContext(GameStateContext)

    const availableGameOptions: gameOption[] = [
        { width: 5, height: 5, bombs: 5, title: "Easy" },
        { width: 10, height: 10, bombs: 15, title: "Medium" },
        { width: 12, height: 12, bombs: 50, title: "Hard" },
    ]

    const handleClick = (width: number, height: number, bombs: number) => {
        const newBoard = createBoard(width, height, bombs)
        setGameState({
            gameStatus: 'start',
            board: newBoard,
            bombs: bombs,
            flags: 0,
            revealedTiles: 0
        })
    }

    return (
        <div className={styles.boardOptionsContainer}>
            <h2>Select your difficulty</h2>
            {availableGameOptions.map(({ width, height, bombs, title }) => {
                return <div key={title} className={styles.boardOption} onClick={() => handleClick(width, height, bombs)}>{`${title} (${width}x${height})`}</div>
            }
            )}
            <CustomDifficulty />
        </div>
    )
}

export default SelectBoard