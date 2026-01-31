import './App.css'
import { Login } from './pages/Login'
import {Route, Routes} from 'react-router-dom'
import { Cadastro } from './pages/Cadastro'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Cadastro />}/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
