import React, { useState } from 'react'
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
    const [formData , setFormData] = useState(null);
  return (
   <UserContext.Provider value={{formData, setFormData}}>
    {children}
   </UserContext.Provider>
  )
}

export default UserContextProvider
