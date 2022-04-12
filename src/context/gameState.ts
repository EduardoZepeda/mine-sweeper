import { createContext, Dispatch, SetStateAction } from 'react'

export interface tile {
    isClicked: boolean
    isBomb: boolean
    isMarked: boolean
    adjacentBombs: number
}

type row = Array<tile>

export type coordinate = [number, number]
export type coordinates = coordinate[]
export type board = row[]

export interface gameOption {
    width: number
    height: number
    bombs: number
    title: string
}

export interface gameStateProps {
    board: board
    gameStatus: 'start' | 'lost' | 'won'
    bombs: number
    flags: number
    revealedTiles: number
}

export interface gameStateContextProps {
    setGameState: Dispatch<SetStateAction<gameStateProps>>
    gameState: gameStateProps
}

export const GameStateContext = createContext<gameStateContextProps>(
    {
        setGameState: () => { },
        gameState: {
            board: [],
            gameStatus: 'start',
            bombs: 0,
            flags: 0,
            revealedTiles: 0,
        }
    })

