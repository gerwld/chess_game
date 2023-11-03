import { useEffect, useState } from "react"
import BoardComponent from "./compontents/BoardComponent"
import { Board } from "./models/Board";

function App() {
  const [board, setBoard] = useState(new Board());

  function restart() {
    const newBoard = new Board();
    newBoard.initSquares();
    setBoard(newBoard);
  }

  useEffect(() => {
    restart();
  }, [])

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={restart} />
    </div>
  )
}

export default App
