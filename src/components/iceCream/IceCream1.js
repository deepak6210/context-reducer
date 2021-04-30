import React, { useContext } from 'react'
import { IceCreamContext } from './IceCreamReducer'
import { Button } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const IceCream1 = () => {
    const iceCreamContext = useContext(IceCreamContext)
    return (
        <div>
            <Title level={4}>cake {iceCreamContext.iceCreamState}</Title>
            <Button type="primary" onClick={() => iceCreamContext.iceCreamDispatch('BUY_ICECREAM')}>Buy IceCream</Button>
        </div>
    )
}


export default IceCream1;