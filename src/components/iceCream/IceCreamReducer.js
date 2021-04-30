import React , { useReducer } from 'react';
import IceCream1 from './IceCream1';
import IceCream2 from './IceCream2';
import { Typography } from 'antd';
import { Button } from 'antd';

const { Title } = Typography;

export const IceCreamContext = React.createContext();
const initialState = 20;
const reducer = (state, action) => {
  switch (action) {
    case 'BUY_ICECREAM':
        return state -1;
    case 'RESET':
        return initialState;
    default:
      return state;
  }
}

const IceCreamReducer = () => {
    const [iceCream, dispatch] = useReducer(reducer, initialState)
    if(iceCream > 0){
    return (
        <IceCreamContext.Provider value = {{ iceCreamState: iceCream, iceCreamDispatch: dispatch }}>
        <div className="App">
          <Title level={3}>No of IceCream available in the store - {iceCream}</Title>
           <IceCream1/>
           <IceCream2/>
        </div>
        </IceCreamContext.Provider>
    )} else{
      return(
        <>  
        <Title level={3}>Today We are out of stock Sorry</Title>
      <Button type="dashed" onClick={() => dispatch('RESET')}>Reset</Button>
      </>
      )
    }
}

export default IceCreamReducer;