import React , {useContext} from 'react';
import { IceCream } from './CompA';
import { Cake } from './CompA';

function Dashboard() {
    const iceCream = useContext(IceCream);
    const cake = useContext(Cake);
    return (
        <div>
             <h1>No of iceCream Left :-  {iceCream}</h1>
             <h1>No of cake Left :-  {cake}</h1>
        </div>
    )
}

export default Dashboard;
