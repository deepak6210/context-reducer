import React, { useContext } from 'react'
import { CountContext } from '../../App'

function CompC() {
    const countContext = useContext(CountContext);
    return (
        <div>
            Component C
            <button onClick={() =>countContext.countDispatch('increment')}>increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompC;