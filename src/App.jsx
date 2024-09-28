import './App.css'
import Login from './Componats/Login'
import Profile from './Componats/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
    <h1>Vishal Babar </h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
