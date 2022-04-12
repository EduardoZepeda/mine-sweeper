import React, { useState, useContext } from 'react'
import styles from '../Main.module.css'
import { GameStateContext, tile } from '../context/gameState'
import getAdjacentTiles from '../utils/getAdjacentTiles'
import getAdjacentZeroes from '../utils/getAdjacentZeroes'


interface tileProps {
    isClicked: boolean
    isBomb: boolean
    isMarked: boolean
    adjacentBombs: number
    coordinateX: number
    coordinateY: number
}

const Tile = ({ isBomb, isClicked, isMarked, adjacentBombs, coordinateX, coordinateY }: tileProps): JSX.Element => {
    const { gameState, setGameState } = useContext(GameStateContext)


    const handleClick = () => {
        // If game finished do nothing
        if (gameState.finishedGame) {
            return
        }
        // if a no bomb tile is clicked, show the adjacent number of bombs
        if (!isBomb) {
            setGameState({
                finishedGame: false,
                board: gameState.board.map((row, indexBoard) => row.map((tile, indexRow) => {
                    if (coordinateX === indexBoard && coordinateY === indexRow) {
                        return { ...tile, isClicked: true }
                    }
                    return tile
                }))
            })
        }
        // if a bomb is clicked, show all other bombs
        if (isBomb) {
            setGameState({
                finishedGame: true,
                board: gameState.board.map((row) => row.map((tile) => {
                    if (tile.isBomb) {
                        return { ...tile, isClicked: true }
                    }
                    return tile
                }))
            })
        }
        // if (adjacentBombs === 0) {
        //     const adjacentTiles = getAdjacentTiles([coordinateX, coordinateY])
        //     const validCoordenates = adjacentTiles.filter(coordinate => coordinate[0] >= 0 && coordinate[0] < gameState.board.length && coordinate[1] >= 0 && coordinate[1] < gameState.board[0].length)
        //     validCoordenates.push([coordinateX, coordinateY])

        //     setGameState({
        //         board: gameState.board.map((row, x) => row.map((tile, y) => {
        //             if (tile.adjacentBombs === 0 && validCoordenates.some(arr => arr[0] === x && arr[1] === y)) {
        //                 return { ...tile, isClicked: true }
        //             }
        //             return tile
        //         }))
        //     })
        // }
    }

    const content = isClicked ? (isBomb ? '💣' : adjacentBombs) : (isMarked ? "marcado" : null)

    return (
        <div onClick={() => handleClick()} className={styles.tile}>{content}</div>
    )
}

export default Tile
