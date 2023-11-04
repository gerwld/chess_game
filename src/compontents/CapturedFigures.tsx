import * as React from 'react'
import { Figure } from '../models/figures/Figure'
import { COLORS } from '../models/Colors'

interface CapturedProps {
    figures: Figure[] | null
}

const CapturedFigures: React.FC<CapturedProps> = ({ figures }) => {
    return (
        <div className="captured">
            {figures.map(e => <div className='captured__piece' title={e.name}>
                <img src={e.logo} alt={e.name} />
            </div>)}
        </div>
    )
}

export default CapturedFigures