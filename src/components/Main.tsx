import React from 'react'
import Board from './Board'
import styles from '../Main.module.css'

const Main = (): JSX.Element => {


    return (
        <main className={styles.main}>
            <Board />
        </main>
    )
}

export default Main
