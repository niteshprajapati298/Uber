import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { useContext } from "react"
import { UserDataContext } from "./context/UserContext"

const App = () => {
   const context = useContext(UserDataContext);
   console.log(context)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignup/>}/>
        <Route path="/captain-login" element={<CaptainLogin/>}/>
        <Route path="/captain-signup" element={<CaptainSignup/>}/>
      </Routes>
    </div>
  )
}

export default App