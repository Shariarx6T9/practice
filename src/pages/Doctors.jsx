import React from 'react'
import { Link } from 'react-router-dom'
import { doctors } from '../data/doctors'
import DoctorImage from '../assets/doctor-sample.png' // <-- ADD THIS IMPORT

export default function Doctors(){
  return (
    <div className="container">
      <h2>All Doctors</h2>
      <p style={{color:'var(--muted)'}}>Browse all ${doctors.length} available specialists.</p>
      <div className="grid-3" style={{marginTop:24}}>
        {doctors.map(d=> (
          <div key={d.id} className="card">
            {/* Using the static imported image for consistency */}
            <img src={DoctorImage} alt="doctor" style={{width:'100%',height:140,objectFit:'cover',borderRadius:8}} />
            <h3 style={{margin:'8px 0'}}>{d.name}</h3>
            <div style={{fontSize:14, fontWeight:500}}>{d.education}</div>
            <div style={{color:'var(--muted)', fontSize:14}}>{d.specialty} • {d.experience}</div>
            <div style={{marginTop:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Link to={`/doctors/${d.id}`}><button className="btn">View Details</button></Link>
              <div style={{textAlign:'right'}}><div style={{fontWeight:700}}>${d.fee}</div><div style={{fontSize:12,color:'var(--muted)'}}>reg:{d.reg}</div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}