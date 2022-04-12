import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { GameStateContext, gameStateProps } from './context/gameState'
import { useState } from 'react'

function App(): React.ReactElement {

  const initialState: gameStateProps = {
    gameStatus: 'start',
    board: [],
    bombs: 0,
    flags: 0,
    revealedTiles: 0
  }

  const [gameState, setGameState] = useState(initialState)

  return (
    <GameStateContext.Provider value={{ gameState: gameState, setGameState: setGameState }}>
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    </GameStateContext.Provider>
  )
}

export default App
