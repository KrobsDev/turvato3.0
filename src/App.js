import { Route, Routes } from 'react-router-dom'
import './assets/styles/App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Index'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/Register'
import Index from './pages/admin/Index'

function App () {
  return (
    <div className='h-full w-full overflow-hidden'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin/' element={<Index />} />
      </Routes>
      {/* footer
      <Footer /> */}
    </div>
  )
}

export default App
