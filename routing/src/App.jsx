import './App.css'
import { Link,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
function App() {

  return(
    <>
    <nav className='navBar'>
      <a className='nav-links logo'><Link to="/">Kavlium ❤️</Link></a>
      <a className='nav-links'><Link to="/About">About</Link></a>
      <a className='nav-links'><Link to="/Contacts">Contacts</Link></a>
    </nav>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contacts" element={<Contacts/>}/>
  </Routes>
    </>
  )
}

export default App
