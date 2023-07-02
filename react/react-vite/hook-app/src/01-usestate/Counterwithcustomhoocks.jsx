import { useCounter } from '../hooks/useState'

export const Counterwithcustomhooks = ()=>{

    const {counter,increment,reset,decrement}= useCounter();

    return (<>

            <h1>counter with hooks: {counter}</h1>


            <button className="btn btn-primary" onClick={()=>increment(2)}>+</button>
            <button className="btn btn-primary" onClick={()=> reset}>reset</button>
            <button className="btn btn-primary" onClick={()=>decrement(3)}>-</button>


    </>)




}