import { useEffect, useState } from "react"
import BoardComponent from "./compontents/BoardComponent"
import { Board } from "./models/Board";
import { Square } from "./models/Square";
import { Player } from "./models/Player";
import { COLORS } from "./models/Colors";

function App() {
  const [board, setBoard] = useState(new Board());
  const [wPlayer, setWPlayer] = useState(new Player(COLORS.WHITE));
  const [bPlayer, setBPlayer] = useState(new Player(COLORS.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  function restart() {
    const newBoard = new Board();
    newBoard.initSquares();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(wPlayer);
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer.color === COLORS.WHITE ? bPlayer : wPlayer)
  }

  useEffect(() => {
    setCurrentPlayer(wPlayer)
    restart();
  }, [])

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer} restart={restart} />
    </div>
  )
}

export default App
