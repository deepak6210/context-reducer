import React , { useReducer } from 'react';
import Cake1 from './Cake1';
import Cake2 from './Cake2';
import { Typography } from 'antd';
import { Button } from 'antd';
const { Title } = Typography;

export const CakeContext = React.createContext();
const initialState = 10;
const reducer = (state, action) => {
  switch (action) {
    case 'BUY_CAKE':
        return state -1;
    case 'RESET':
       return initialState;
    default:
      return state;
  }
}

const CakeReducer = () => {
    const [cake, dispatch] = useReducer(reducer, initialState)
    if(cake > 0){
    return (
        <CakeContext.Provider value = {{ cakeState: cake, cakeDispatch: dispatch }}>
        <div className="App">
          <Title level={3}>No of Cakes available in the store - {cake}</Title>
           <Cake1 />
           <Cake2/>
        </div>
        </CakeContext.Provider>
    )} else{
      return (
        <>
      <Title level={3}>Today We are out of stock Sorry</Title>
      <Button type="dashed" onClick={() => dispatch('RESET')}>Reset</Button>
      </>
      )
    }
}

export default CakeReducer;