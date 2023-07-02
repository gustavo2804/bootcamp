import { useEffect } from "react";
import { useState } from "react"


export const Simpleform = () => {
  
            const [Formstate, setFormstate] = useState({
                userName:"juan de los palotes",
                email:"juanpalo@email.com"

            })
  
  
  const {userName, email} = Formstate;

  const imputchange = ({target})=>{
     const {name, value} = target;
     setFormstate(
      {
        ...Formstate, [name]:value
      }
     ) 
  }

  useEffect(() => {
    console.log('useEffect activado')  
  }, [])
  useEffect(() => {
    console.log('userName cambio')  
  }, [userName])
  useEffect(() => {
    console.log('email cambio')  
  }, [email])


  
  
  return (
    <>
        <h1>Simpleform</h1>
        <hr />

        <input

          type="text"
          className="form-control"
          placeholder="userName"
          name="userName"
          value ={userName}
          onChange={imputchange}
        />
        <br />
        <input
          
          type="email"
          className="form-control mt-2"
          placeholder="gustav@email.com"
          name="email"
          value={email}
          onChange={imputchange}
        />




    </>
  )
}
