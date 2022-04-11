import React from 'react'
import createBoard from '../utils/createBoard'
import styles from '../Main.module.css'
import Tile from './Tile'

const Board = (): JSX.Element => {
    const boardData = createBoard(10, 10, 15)
    const Board = boardData.map(row => {
        return <div className={styles.row}>{row.map(tile => <Tile content={tile} />)}</div>
    })
    return (
        <div>
            {Board}
        </div>
    )
}

export default Board
