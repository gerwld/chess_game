import * as React from 'react'
import { Board } from "../models/Board"
import SquareComponent from "./SquareComponent"

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
    return (
        <div className='board'>
            {board.squares.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map((square, il) => <SquareComponent color={square.color} id={square.id} />)}
                </React.Fragment>)}
        </div>


    )
}

export default BoardComponent