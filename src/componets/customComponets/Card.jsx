import React from 'react'
import Button from './Button'

const Card = ({titel, des}) => {
  return (
<<<<<<< HEAD
    <div style={{border:2, borderColor:"pink", backgroundColor:"grey"}}>
        <h1 style={{color:"red"}}>{titel}</h1>
        <p>{des}</p>

        <Button title="Save user details" disabled={false}/>
=======
    <div style={{border:2, borderColor:"pink", backgroundColor:"grey", padding:10, borderRadius:10}}>
        <h1 style={{color:"red" }}>{titel}</h1>
        <p style={{padding:5}}>{des}</p>
>>>>>>> 31c55949b85878a0ae0b2520336b1de16900334c
      
    </div>
  )
}

export default Card
