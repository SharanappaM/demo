import React, { useContext } from 'react'

import UserContext from './UserContext'

const UserProfile = () => {
    const {formData} = useContext(UserContext)
  return (
    <div>
      <h1>Hello this user{formData?.username} logged in </h1>
    </div>
  )
}

export default UserProfile
