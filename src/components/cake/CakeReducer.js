import React , { useReducer } from 'react';
import Cake1 from './Cake1';
import Cake2 from './Cake2';

export const CakeContext = React.createContext();
const initialState = 10;
const reducer = (state, action) => {
  switch (action) {
    case 'BUY_CAKE':
        return state -1;
    default:
      return state;
  }
}

const CakeReducer = () => {
    const [cake, dispatch] = useReducer(reducer, initialState)
    return (
        <CakeContext.Provider value = {{ cakeState: cake, cakeDispatch: dispatch }}>
        <div className="App">
          count - {cake}
           <Cake1 />
           <Cake2/>
        </div>
        </CakeContext.Provider>
    )
}

export default CakeReducer;