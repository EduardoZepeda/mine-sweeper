import React, { useContext, useState } from 'react'
import { GameStateContext } from '../context/gameState'
import createBoard from '../utils/createBoard'
import styles from '../Main.module.css'

interface customDifficultyOptions {
    bombs: number
    width: number
    height: number
}

const CustomDifficulty = () => {
    const { setGameState } = useContext(GameStateContext)
    const [customDifficulty, setCustomDifficulty] = useState<customDifficultyOptions>({ "bombs": 1, "width": 2, "height": 2 })

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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Always make sure the maximum number of bombs doesn't exceed width x height - 1
        setCustomDifficulty({ ...customDifficulty, [event.target.id]: event.target.value })
    }

    return (
        <div className={styles.customDifficulty}>
            <h2>Custom difficulty</h2>
            <label htmlFor="width">Width</label>
            <input onChange={handleChange} value={customDifficulty.width} id="width" type="range" min="2" max="50" step="1" />
            <label htmlFor="height">Height</label>
            <input onChange={handleChange} value={customDifficulty.height} id="height" type="range" min="2" max="50" step="1" />
            <label htmlFor="bombs">Bombs</label>
            <input onChange={handleChange} value={customDifficulty.bombs} id="bombs" type="range" min="1" max={customDifficulty.width * customDifficulty.height - 1} step="1" />
            <p>{`size: ${customDifficulty.width}x${customDifficulty.height}`}{` bombs: ${customDifficulty.bombs}`}</p>
            <button className={styles.customGameButton}
                onClick={() => handleClick(
                    customDifficulty.width,
                    customDifficulty.height,
                    customDifficulty.bombs)}
                onInput={() => handleClick(
                    customDifficulty.width,
                    customDifficulty.height,
                    customDifficulty.bombs)}>Create board</button>
        </div>
    )
}

export default CustomDifficulty