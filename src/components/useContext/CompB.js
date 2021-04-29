import React, { useContext } from 'react'
import { CountContext } from '../../App'

function CompB() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component B
            <button onClick={() =>countContext.countDispatch('increment')}>increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompB;
