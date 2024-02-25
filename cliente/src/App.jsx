import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-out' element={<SignUp />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
