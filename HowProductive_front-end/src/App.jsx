import './App.css'
import { Login } from './pages/Login'
import {Route, Routes} from 'react-router-dom'
import { Cadastro } from './pages/Cadastro'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Cadastro />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
