import './assets/styles/App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App () {
  return (
    <div className='h-full w-full'>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
}

export default App
