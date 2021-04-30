import React, { useContext } from 'react'
import { CakeContext } from './CakeReducer'
import { Button } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const Cake1 = () => {
    const cakeContext = useContext(CakeContext)
    return (
        <div>
            <Title level={4}>cake {cakeContext.cakeState}</Title>
            <Button type="primary"  onClick={() => cakeContext.cakeDispatch('BUY_CAKE')}>Buy Cake</Button>
        </div>
    )
}


export default Cake1;