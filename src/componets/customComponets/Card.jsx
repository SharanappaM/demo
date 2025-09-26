import React from 'react'
import Button from './Button'

const Card = ({titel, des}) => {
  return (
    <div style={{border:2, borderColor:"pink", backgroundColor:"grey"}}>
        <h1 style={{color:"red"}}>{titel}</h1>
        <p>{des}</p>

        <Button title="Save user details" disabled={false}/>
      
    </div>
  )
}

export default Card
