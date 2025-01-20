import { useState } from "react";
import confetti from "canvas-confetti";

import { Square } from "./components/Square.jsx";
import { TURN } from "./Constants.js";
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";

function App () {
  const [turn, setTurn] = useState(TURN.X)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [winner, setWinner] = useState(null) // null es no, false es empate, true es winner

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURN.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    // no actualizar tablero si el index ya tiene algo
    // o si ya hay ganador
    if (board[index] || winner) return 
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn == TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)
    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <div className="game">
        {
          board.map((_, index) => {
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>  
            )
          })
        }
      </div>
      <section className="turn">
        <Square isSelected={turn==TURN.X}>
          {TURN.X}
        </Square>
        <Square isSelected={turn==TURN.O}>
          {TURN.O}
        </Square>
      </section>
      <section>

        <WinnerModal resetGame={resetGame} winner={winner} />
      </section>
    </main>
  )
}

export default App;