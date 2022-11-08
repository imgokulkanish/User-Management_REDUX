import './App.css'
import Home from './Pages/Home/Home'
import Users from './Pages/Users/Users'
import Contact from './Pages/Contact/Contact'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/users" element={<Users />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contacts" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
