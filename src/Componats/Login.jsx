import React, { useState } from 'react'
import UserContext from '../context/useContext'

function Login() {
const [userName, setUsername] = useState('');
const [passWord, setPassword] = useState('');

const {setUser} = UserContext(UseContext)

const handelSubmit = (e) => {
   e.preventDefault()
   setUser({userName, passWord})
}

  return (
    <div>
      <h1>Login</h1>
      <input
       type="text"
       value={userName}
       onChange={(e) => setUsername(e.target.value)}
       placeholder='UserName'/>
      <input
       type="text"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       placeholder='PassWord'/>
      <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login
