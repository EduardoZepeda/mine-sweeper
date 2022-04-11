import React from 'react'
import styles from '../Main.module.css'

interface tileProps {
    content: string | number | undefined
}

const Tile = ({ content }: tileProps): JSX.Element => {
    return (
        <div className={styles.tile}>{content}</div>
    )
}

export default Tile
