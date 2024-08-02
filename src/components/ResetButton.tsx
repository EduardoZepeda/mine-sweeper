import React, { useContext } from 'react'
import styles from '../Buttons.module.css'

import { GameStateContext } from '../context/gameState'

const ResetButton = (): React.ReactElement => {
    const { gameState, setGameState } = useContext(GameStateContext)
    return (
        <button
            disabled={gameState.board.length === 0 ? true : false}
            onClick={() => setGameState({ board: [], gameStatus: 'start', bombs: gameState.bombs, flags: 0, revealedTiles: 0 })}
            className={styles.resetBtn}>
            Reset game
        </button>
    )
}

export default ResetButton
