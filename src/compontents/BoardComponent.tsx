import * as React from 'react'
import { Board } from "../models/Board"
import SquareComponent from "./SquareComponent"
import { Square } from '../models/Square'

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
    const [selectedSquare, setSelectedSquare] = React.useState<Square | null>(null);

    function click(square: Square) {
        if (selectedSquare && selectedSquare !== square && selectedSquare.figure?.canMove(square)) {
            selectedSquare.moveFigure(square)
            setSelectedSquare(null);
        }
        else if (square?.y === selectedSquare?.y && square?.x === selectedSquare?.x) {
            setSelectedSquare(null)
        }
        else if (square.figure)
            setSelectedSquare(square);

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


    )
}

export default BoardComponent