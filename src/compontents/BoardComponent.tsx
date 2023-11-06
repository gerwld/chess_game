import * as React from 'react'
import { Board } from "../models/Board"
import SquareComponent from "./SquareComponent"
import { Square } from '../models/Square'
import { Player } from '../models/Player'
import CapturedFigures from './CapturedFigures'
import { COLORS } from '../models/Colors'
import SessionTimer from './SessionTimer'

interface BoardProps {
    board: Board,
    currentPlayer: Player | null
    setBoard: (board: Board) => void
    swapPlayer: () => void
    restart: () => void
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard, swapPlayer, currentPlayer, restart }) => {
    const [selectedSquare, setSelectedSquare] = React.useState<Square | null>(null);
    const [blackTime, setBlackTime] = React.useState(300);
    const [whiteTime, setWhiteTime] = React.useState(300);
    const timer = React.useRef<null | ReturnType<typeof setInterval>>(null)

    function click(square: Square) {
        // своп фігури на нове місце якщо це можливо
        if (selectedSquare && selectedSquare !== square && selectedSquare.figure?.canMove(square)) {
            selectedSquare.moveFigure(square)
            swapPlayer()
            setSelectedSquare(null);
        }
        // Інакше анселлект або виділеня
        else if (square.figure && square.figure.color == currentPlayer.color && square !== selectedSquare)
            setSelectedSquare(square);
        else setSelectedSquare(null)
    }


    // timer logic 
    function decrementBlackTimer() {
        setBlackTime(prev => prev > 0 ? prev - 1 : 0)
    }

    function decrementWhiteTimer() {
        setWhiteTime(prev => prev > 0 ? prev - 1 : 0)
    }

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current)
        }

        const callback =
            currentPlayer?.color === COLORS.WHITE
                ? decrementWhiteTimer
                : decrementBlackTimer

        timer.current = setInterval(callback, 1000)
    }

    function handleResign() {
        restart()
        setBlackTime(300)
        setWhiteTime(300)
    }

    React.useEffect(() => {
        currentPlayer && startTimer()
    }, [currentPlayer])


    function hightlightSquares() {
        board.highlightSquares(selectedSquare);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard)
    }

    React.useEffect(() => {
        hightlightSquares()
    }, [selectedSquare])


    return (
        <>
            <aside>
                <SessionTimer currentPlayer={currentPlayer} time={blackTime} isBlack={true} />
                <SessionTimer currentPlayer={currentPlayer} time={whiteTime} isBlack={false} />

                <span className={
                    ['current_player',
                        currentPlayer?.color === COLORS.BLACK ? "current_player__bl" : "current_player__wh"].join(" ")
                }>
                    {currentPlayer?.color} to move
                </span>

                <div className="group">
                    <CapturedFigures figures={board.lostBlackFigures} />
                    <CapturedFigures figures={board.lostWhiteFigures} />
                    <button onClick={handleResign}>Resign</button>
                </div>

            </aside>
            <div className='board'>
                {board.squares.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map((square, il) =>
                            <SquareComponent
                                click={click}
                                color={square.color}
                                key={square.id}
                                figure={square.figure}
                                square={square}
                                selected={square.x === selectedSquare?.x && square.y === selectedSquare?.y} />)}
                    </React.Fragment>)}
            </div>

        </>

    )
}

export default BoardComponent