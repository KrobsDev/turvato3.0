import { Route, Routes } from 'react-router-dom'
import './assets/styles/App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Footer from './components/Footer'
import SignUp from './pages/Register'

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
      </Routes>
      {/* footer
      <Footer /> */}
    </div>
  )
}

export default App
