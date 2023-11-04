import * as React from 'react'
import { Player } from '../models/Player'

interface SessionProps {
    isBlack: boolean,
    currentPlayer: Player | null,
    time: any
}

const SessionTimer = ({ isBlack, currentPlayer, time }) => {
    const min = Math.floor(time / 60),
        sec = time - (min * 60)
    if (currentPlayer && time)
        return (
            <div className={[
                "session_timer",
                isBlack ? "session_timer__black" : "session_timer__white"
            ].join(" ")}>{min}:{sec < 10 ? '0' + String(sec) : sec}</div>
        )
    return ""
}

export default SessionTimer