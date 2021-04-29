import React, {useContext} from 'react'
import { CakeContext } from './CakeReducer'

const Cake1 = () => {
    const cakeContext = useContext(CakeContext)
    return (
        <div>
            cake {cakeContext.cakeState}
            <button onClick={() =>cakeContext.cakeDispatch('BUY_CAKE')}>Buy Cake</button>
        </div>
    )
}

export default Cake1;