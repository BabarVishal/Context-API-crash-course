import React from 'react'
import UserContext from '../context/useContext'

function Profile() {
    const {user} = UserContext(UserContext)
  
    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.userName}</div>
}

export default Profile
