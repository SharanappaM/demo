import React from 'react'
import Button from './Button'

const Card = ({titel, des}) => {
  return (

    <div style={{border:2, borderColor:"pink", backgroundColor:"grey", padding:10, borderRadius:10}}>
        <h1 style={{color:"red" }}>{titel}</h1>
        <p style={{padding:5}}>{des}</p>

      
    </div>
  )
}

export default Card
