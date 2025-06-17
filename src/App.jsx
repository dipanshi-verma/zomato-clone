import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import { Routes,Route} from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import AddSeller from './AddSeller'
import Login from './Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/add' element={<AddSeller/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
       </Routes>
      </div>
      
    </>
  )
}

export default App
