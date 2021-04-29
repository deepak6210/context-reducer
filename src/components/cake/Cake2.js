import React, {useContext} from 'react'
import { CakeContext } from './CakeReducer'

const Cake2 = () => {
    const cakeContext = useContext(CakeContext)
    return (
        <div>
             Cake {cakeContext.cakeState}
            <button onClick={() =>cakeContext.cakeDispatch('BUY_CAKE')}>Buy Cake</button>
        </div>
    )
}

export default Cake2;
