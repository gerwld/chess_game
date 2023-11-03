import * as React from 'react'
import { Board } from "../models/Board"
import { COLORS } from '../models/Colors'

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
    return (
        <div className='board'>
            {board.squares.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map((square, il) => <div className={`square ${square.color}`} key={square.id}>{square.color}</div>)}
                </React.Fragment>)}
        </div>
    )
}

export default BoardComponent