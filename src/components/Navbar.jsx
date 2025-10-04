import React from 'react'
import { NavLink } from 'react-router-dom'
import SiteLogo from '../assets/logo.png' // <-- ADDED PHOTO IMPORT

export default function NavBar(){
  return (
    <nav className="nav">
      <div className="logo">
        {/* Using imported variable */}
        <img src={SiteLogo} alt="logo" style={{width:48,height:48,borderRadius:10}} />
        <div>
          <div style={{fontWeight:700}}>MediCare</div>
          <div style={{fontSize:12,color:'var(--muted)'}}>Book appointments quickly</div>
        </div>
      </div>
      <div style={{display:'flex',gap:18,alignItems:'center'}}>
        <NavLink to="/" end style={({isActive})=>({color:isActive?'var(--accent)':'inherit'})}>Home</NavLink>
        <NavLink to="/doctors" style={({isActive})=>({color:isActive?'var(--accent)':'inherit'})}>Doctors</NavLink>
        <NavLink to="/bookings" style={({isActive})=>({color:isActive?'var(--accent)':'inherit'})}>Bookings</NavLink>
        <NavLink to="/blogs" style={({isActive})=>({color:isActive?'var(--accent)':'inherit'})}>Blogs</NavLink>
        <button className="btn">Contact Us</button>
      </div>
    </nav>
  )
}