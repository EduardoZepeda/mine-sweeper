
import React, { useContext } from 'react'
import styles from '../Header.module.css'
import { GameStateContext } from '../context/gameState'
import ResetButton from './ResetButton'

const Header = (): JSX.Element => {
  const { gameState, setGameState } = useContext(GameStateContext)

  return (
    <header className={styles.header}>
      <div>Mine Sweeper 💣</div>
      <ResetButton />
    </header>
  )
}

export default Header
