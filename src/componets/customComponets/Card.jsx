import React from 'react'

const Card = ({titel, des}) => {
  return (
    <div style={{border:2, borderColor:"pink", backgroundColor:"grey"}}>
        <h1 style={{color:"red"}}>{titel}</h1>
        <p>{des}</p>
      
    </div>
  )
}

export default Card
