import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Header/>
     <BrowserRouter basename='/'>
    <Routes>
      <Route path='/'  element={<Main/>}/>
    </Routes>
   </BrowserRouter>
   <Footer/>
    </div>
  )
}

export default App
