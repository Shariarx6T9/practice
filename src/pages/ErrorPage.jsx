import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage(){
  return (
    <div className="container" style={{textAlign:'center', padding:80}}>
      <h1 style={{fontSize:80, color:'#ef4444'}}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{color:'var(--muted)'}}>The route you navigated to does not exist.</p>
      {/* Button to redirect users to Homepage */}
      <Link to="/"><button className="btn" style={{marginTop:20}}>Go to Homepage</button></Link>
    </div>
  )
}