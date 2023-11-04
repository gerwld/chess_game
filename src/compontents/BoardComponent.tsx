import * as React from 'react'
import { Board } from "../models/Board"
import SquareComponent from "./SquareComponent"
import { Square } from '../models/Square'
import { Player } from '../models/Player'
import { COLORS } from '../models/Colors'

interface BoardProps {
    board: Board,
    currentPlayer: Player | null
    setBoard: (board: Board) => void
    swapPlayer: () => void
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard, swapPlayer, currentPlayer }) => {
    const [selectedSquare, setSelectedSquare] = React.useState<Square | null>(null);

    function click(square: Square) {
        // своп фігури на нове місце якщо це можливо
        if (selectedSquare && selectedSquare !== square && selectedSquare.figure?.canMove(square)) {
            selectedSquare.moveFigure(square)
            swapPlayer()
            setSelectedSquare(null);
        }
        // Інакше анселлект або виділеня
        else if (square.figure && square.figure.color == currentPlayer.color)
            setSelectedSquare(square);
        else setSelectedSquare(null)

    }

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
            <span>{currentPlayer?.color} to move</span>
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