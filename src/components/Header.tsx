
import React from 'react'
import styles from '../Header.module.css'
import ResetButton from './ResetButton'

const Header = (): React.ReactElement => {

  return (
    <header className={styles.header}>
      <div>Mine Sweeper 💣</div>
      <ResetButton />
    </header>
  )
}

export default Header
