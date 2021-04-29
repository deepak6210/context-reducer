import React, { useContext } from 'react'
import { CountContext } from '../../App'

function CompA() {
    const countContext = useContext(CountContext)
    return (
        <div>
             Component A
            <button onClick={() =>countContext.countDispatch('increment')}>increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompA;

