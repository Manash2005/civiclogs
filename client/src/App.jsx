import {Routes, Route} from 'react-router-dom'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import CitizenDashboard from './pages/citizenDashboard'
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/citizen/dashboard" element={<CitizenDashboard />} />
    </Routes>
  )
}

export default App