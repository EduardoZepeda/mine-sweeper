import React, { useContext } from 'react'
import Board from './Board'
import SelectBoard from './SelectBoard'
import styles from '../Main.module.css'
import { GameStateContext } from '../context/gameState'

const Main = (): JSX.Element => {
    const { gameState } = useContext(GameStateContext)

    const MainContent = gameState.board.length === 0 ? <SelectBoard /> : <Board />

    return (
        <main className={styles.main}>
            {MainContent}
        </main>
    )

}

export default Main
