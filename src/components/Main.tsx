import React, { useContext } from 'react'
import Board from './Board'
import SelectBoard from './SelectBoard'
import { GameStateContext } from '../context/gameState'

const Main = (): React.ReactElement => {
    const { gameState } = useContext(GameStateContext)

    if(gameState.gameStatus==='start'){
        return (
        <SelectBoard />
        )
    }
    if(gameState.gameStatus==='progress'){
        return (
        <>
            <h2>Be careful</h2>
            <p><small>Don't explode!</small></p>
            <Board />
        </>
        )
    }
    if(gameState.gameStatus==='lost'){
        return (
        <>
            <h2>Game over!</h2>
            <p><small>See you space cowboy!</small></p>
            <Board />
        </>
        )
    }
    // otherwise won
    return <h2>You won!</h2>
}

export default Main
