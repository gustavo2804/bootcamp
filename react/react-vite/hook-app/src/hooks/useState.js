import { useState } from "react"


export const useCounter = (inivalue = 10)=> {


        const [counter,setcounter] = useState(inivalue)

        const increment = (value = 1)=>{

            setcounter(counter + value)

        }

        
        const decrement = (value = 1)=>{

            setcounter(counter-value)

        }

        
        const reset = ()=>{

            setcounter(inivalue)

        }




    return{
        counter,
        reset,
        increment,
        decrement
    }
}