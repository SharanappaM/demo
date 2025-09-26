import React, { useContext, useState } from 'react'

import UserContext from './UserContext'

const LoginForm = () => {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const { setFormData} = useContext(UserContext)
    
  
    const handleSubmit = (e)=>{
        e.preventDefault()
        setFormData({username,password})
    }
  return (
    <div>
        <label htmlFor="">Name :</label>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} /> <br />
        <label htmlFor="">Password :</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} /> <br />
        <button onClick={handleSubmit}>Submit</button>
      
    </div>
  )
}

export default LoginForm
