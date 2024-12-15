import { Route, Routes } from "react-router-dom"
import Start from "./pages/Start"
import Home from "./pages/Home"
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { useContext } from "react"
import { UserDataContext } from "./context/UserContext"
import UserProtectedWrapper from "./pages/UserProtectedWrapper"
import UserLogout from "./pages/UserLogout"
import CaptainHome from "./pages/CaptainHome"
import CaptainProtectedWrapper from "./pages/CaptainProtectorWrapper"

const App = () => {
   const context = useContext(UserDataContext);
   console.log(context)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignup/>}/>
        <Route path="/captain-login" element={<CaptainLogin/>}/>
        <Route path="/captain-signup" element={<CaptainSignup/>}/>
        <Route path="/home" element={<UserProtectedWrapper><Home/></UserProtectedWrapper>}/>
        <Route path="/user/logout" element={<UserProtectedWrapper><UserLogout/></UserProtectedWrapper>}/>
        <Route path="/captain-home" element={<CaptainProtectedWrapper><CaptainHome/></CaptainProtectedWrapper>}/>
      </Routes>
    </div>
  )
}

export default App
