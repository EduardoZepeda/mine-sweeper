
import React, { useContext } from 'react'
import styles from '../Header.module.css'
import ResetButton from './ResetButton'

const Header = (): JSX.Element => {

  return (
    <header className={styles.header}>
      <div>Mine Sweeper 💣</div>
      <ResetButton />
    </header>
  )
}

export default Header
