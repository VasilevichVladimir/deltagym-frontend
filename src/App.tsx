import './App.css'
import { Registration } from './pages/Registration'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { Authorization } from './pages/Authorization'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/authorization' replace />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/authorization' element={<Authorization />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
