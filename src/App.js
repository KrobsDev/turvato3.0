import { Route, Routes } from 'react-router-dom'
import './assets/styles/App.css'
import Navbar from './components/Navbar'
import AdminSidebar from './components/AdminSidebar'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/Register'
import Index from './pages/admin/Index'
import Products from './pages/admin/Products'
import { AuthProvider } from './context/AuthProvider'
import { CookiesProvider } from 'react-cookie'
import ProductDetails from './pages/ProductDetails'
import AdminLayout from './layouts/AdminLayout'
import NavLayout from './layouts/NavLayout'

function App () {
  return (
    <div className='h-full w-full overflow-hidden'>
      <CookiesProvider>
        <AuthProvider>
          <Routes>
            <Route path='/admin' element={<AdminLayout />}>
              <Route index={true} element={<Index />} />
              <Route path='products' element={<Products />} />
            </Route>
            <Route path='/' element={<NavLayout />}>
              <Route index={true} element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='signin' element={<Login />} />
              <Route path='signup' element={<SignUp />} />
              <Route path='productDetails' element={<ProductDetails />} />
            </Route>
          </Routes>
        </AuthProvider>
      </CookiesProvider>
      {/* footer
      <Footer /> */}
    </div>
  )
}

export default App
