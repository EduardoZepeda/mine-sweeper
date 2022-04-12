import React, { useContext } from 'react'
import { GameStateContext, gameOption } from '../context/gameState'
import createBoard from '../utils/createBoard'
import styles from '../Main.module.css'



const SelectBoard = () => {
    const { setGameState } = useContext(GameStateContext)

    const availableGameOptions: gameOption[] = [
        { width: 5, height: 5, bombs: 1, title: "Easy" },
        { width: 10, height: 10, bombs: 15, title: "Medium" },
        { width: 15, height: 15, bombs: 60, title: "Hard" },
    ]

    const handleClick = (width: number, height: number, bombs: number) => {
        const newBoard = createBoard(width, height, bombs)
        setGameState({
            finishedGame: false,
            board: newBoard,
        })
    }

    return (
        <div className={styles.boardOptionsContainer}>
            <h2>Select your difficulty</h2>
            {availableGameOptions.map(({ width, height, bombs, title }) => {
                return <div key={title} className={styles.boardOption} onClick={() => handleClick(width, height, bombs)}>{`${title} (${width}x${height})`}</div>
            }
            )}
        </div>
    )
}

export default SelectBoard