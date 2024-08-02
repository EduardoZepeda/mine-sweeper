import React, { useContext } from 'react'
import { GameStateContext } from '../context/gameState'
import Board from './Board'


const Lost = (): React.ReactNode => {
    const { gameState } = useContext(GameStateContext)

    return (
        <div>
            <Board />
        </div>
    )
}

export default Lost