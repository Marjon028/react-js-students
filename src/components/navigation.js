import './style/navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as  Router, Route,Routes, Link } from 'react-router-dom'
import   ContextData  from './pages/contextPages'
import { useState } from 'react'
const NavigationData= ()=>{
 const [home , setHome] = useState(false)
 const [about , setAbout] = useState(false)
 const [contact , setContact] = useState(false)
const handleHome =(e)=>{
    setHome(e)
    setAbout(false)
    setContact(false)
}
const handleAbout =(e)=>{
    setHome(false)
    setAbout(e)
    setContact(false)
}
const handleContact =(e)=>{
    setHome(false)
    setAbout(false)
    setContact(e)
}

    return(
       
      
      <Router>
      <div>
        <nav className='navbar'>
            <div className='nav-title'><h4>My Apps</h4></div>
          <div className='nav-links'>
          
           <div> <Link to="/" className={home ? 'box-clicked': 'box'} onClick={()=>handleHome(true)} >Home</Link> </div>
          
          
           <div>  <Link to="/about" className={about ? 'box-clicked': 'box'} activeClassName="active-link" onClick={()=>handleAbout(true)}>About</Link> </div>
           
          
           <div>  <Link to="/contact" className={contact ? 'box-clicked': 'box'} onClick={()=>handleContact(true)}>Contact</Link> </div>
          
          </div>
        </nav>

        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<navigationData/>} />
          <Route path="/about" element={<ContextData/>} />
          <Route path="/contact" element={<ContextData/>} /> {/* Example Contact route */}
        </Routes>
      </div>
    </Router>
  );
}
export default NavigationData;