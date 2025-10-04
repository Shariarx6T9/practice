import React from 'react'
import SiteLogo from '../assets/logo.png' // <-- ADDED PHOTO IMPORT

export default function Footer(){
  return (
    <footer className="footer">
      {/* Using imported variable */}
      <img src={SiteLogo} alt="logo" style={{width:48,height:48}} />
      <div style={{display:'flex', gap:20, justifyContent:'center', margin:'12px 0'}}>
        <a href="/" style={{color:'white', textDecoration:'none'}}>Home</a>
        <a href="/doctors" style={{color:'white', textDecoration:'none'}}>Find Doctor</a>
        <a href="/bookings" style={{color:'white', textDecoration:'none'}}>My Bookings</a>
        <a href="/blogs" style={{color:'white', textDecoration:'none'}}>Blogs</a>
      </div>
      <div style={{display:'flex', gap:15, justifyContent:'center', margin:'15px 0'}}>
        {/* Placeholder social icons */}
        <a href="https://github.com/developer" target="_blank" rel="noopener noreferrer" style={{color:'white', fontSize:'24px'}}>GitHub</a>
        <a href="https://linkedin.com/in/developer" target="_blank" rel="noopener noreferrer" style={{color:'white', fontSize:'24px'}}>LinkedIn</a>
        <a href="https://twitter.com/developer" target="_blank" rel="noopener noreferrer" style={{color:'white', fontSize:'24px'}}>Twitter</a>
      </div>
      <div>© {new Date().getFullYear()} MediCare — Built by You</div>
    </footer>
  )
}