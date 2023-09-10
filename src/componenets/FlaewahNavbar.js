import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import flaewah_logo from "../images/flaewah-logo.png"
// import lafare_logo from "../images/lafare-white-logo-m.png"
import menu_icon from "../images/menu-icon-13.png"


const FlaewahNavbar = ({ bgc }) => {
  const [flaewahMenu, setFlaewahMenu] = useState(false)
  return (
    <div style={{ backgroundColor: bgc }} className='flaewah-navbar'>
      <div className="flaewah-navbar-logo">
        <NavLink to="/"><img className='flaewag-logo' src={flaewah_logo} alt="flaewah" /></NavLink>
      </div>
      <div onClick={() => setFlaewahMenu(!flaewahMenu)} className="menu-button"><img src={menu_icon} alt="flaewah" /></div>
      <div onClick={()=>setFlaewahMenu(false)} className={flaewahMenu?"flaewah-navbar-links-mobile":"flaewah-navbar-links"}>
        <NavLink className={({ isActive }) => isActive ? "flaewah-navbar-link-active" : "flaewah-navbar-link"} to="/">Home</NavLink>
        {/* <NavLink className={({ isActive }) => isActive ? "flaewah-navbar-link-active" : "flaewah-navbar-link"} to="/flaewah/whyflaewah">Why Flaewah</NavLink> */}
        <NavLink className={({ isActive }) => isActive ? "flaewah-navbar-link-active" : "flaewah-navbar-link"} to="/contact">Contact</NavLink>
        <NavLink className={({ isActive }) => isActive ? "flaewah-navbar-link-active" : "flaewah-navbar-link"} to="/"></NavLink>
      </div>

    </div>
  )
}

export default FlaewahNavbar