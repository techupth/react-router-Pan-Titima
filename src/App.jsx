import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Products } from './pages/products'
function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </Router>

  )
}

export default App
