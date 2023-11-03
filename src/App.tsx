import { useEffect, useState } from "react"
import BoardComponent from "./compontents/BoardComponent"
import { Board } from "./models/Board";
import { Square } from "./models/Square";

function App() {
  const [board, setBoard] = useState(new Board());

  function restart() {
    const newBoard = new Board();
    newBoard.initSquares();
    newBoard.addFigures()
    setBoard(newBoard);
  }

  useEffect(() => {
    restart();
  }, [])

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  )
}

export default App
