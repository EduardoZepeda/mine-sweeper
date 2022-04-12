
import React, { useContext } from 'react'
import styles from '../Header.module.css'
import { GameStateContext } from '../context/gameState'

const Header = (): JSX.Element => {
  const { gameState, setGameState } = useContext(GameStateContext)

  return (
    <header className={styles.header}>
      <div>Mine Sweeper 💣</div>
      <button disabled={gameState.board.length === 0 ? true : false} onClick={() => setGameState({ board: [], finishedGame: false })} className={styles.resetBtn}>Reset game</button>
    </header>
  )
}

export default Header
