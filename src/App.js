import { Route, Routes } from 'react-router-dom'
import './assets/styles/App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Index'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/Register'
import Index from './pages/admin/Index'
import { AuthProvider } from './context/AuthProvider'
import { CookiesProvider } from 'react-cookie'

function App () {
  return (
    <div className='h-full w-full overflow-hidden'>
      <CookiesProvider>
        <AuthProvider>
          <Navbar></Navbar>
          <Routes>
            <Route path='/admin/' element={<Index />} />
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </CookiesProvider>
      {/* footer
      <Footer /> */}
    </div>
  )
}

export default App
