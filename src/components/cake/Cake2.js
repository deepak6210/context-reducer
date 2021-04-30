import React, { useContext } from 'react'
import { CakeContext } from './CakeReducer'
import { Button } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const Cake2 = () => {
    const cakeContext = useContext(CakeContext)
    return (
        <div>
            <Title level={4}> Cake {cakeContext.cakeState}</Title>
            <Button type="primary" onClick={() => cakeContext.cakeDispatch('BUY_CAKE')}>Buy Cake</Button>
        </div>
    )
}

export default Cake2;
