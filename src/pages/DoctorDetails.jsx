import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doctors } from '../data/doctors'
import { loadBookings, saveBookings } from '../utils/storage'
import toast from 'react-hot-toast' 
import DoctorImage from '../assets/doctor-sample.png' // <-- ADDED PHOTO IMPORT

export default function DoctorDetails(){
  const { id } = useParams()
  const navigate = useNavigate()
  const [doc, setDoc] = useState(null)
  
  useEffect(()=>{
    const found = doctors.find(d=> d.id === id)
    setDoc(found || null)
  },[id])

  // Handles Invalid Dynamic Routes
  if(doc===null) return (
    <div className="container card" style={{padding:40, textAlign:'center'}}>
      <h2 style={{color:'#ef4444'}}>Doctor Profile Not Found</h2>
      <p>The ID **{id}** does not match any doctor in our system.</p>
      <button className="btn" onClick={()=>navigate(-1)} style={{background:'#ef4444'}}>Go Back</button>
    </div>
  )

  const handleBook = ()=>{
    const current = loadBookings()
    const exists = current.find(b=> b.doctorId === doc.id)
    
    // If user already booked
    if(exists){
      toast.error(`You already have a booking for ${doc.name}.`)
      return
    }
    
    // Create an appointment & Show success toast
    const booking = { 
      id: Date.now().toString(), 
      doctorId: doc.id, 
      name: doc.name, 
      fee: doc.fee, 
      education: doc.education, 
      specialty: doc.specialty 
    }
    const next = [booking,...current]
    saveBookings(next)
    
    toast.success(`Appointment with Dr. ${doc.name} successfully booked!`)
    
    // Redirect to Booking Page
    navigate('/bookings')
  }

  return (
    <div className="container">
      {/* Page Info Card titled "Doctor’s Profile Details” */}
      <div className="card" style={{padding:24}}>
        <h2>Doctor's Profile Details</h2>
        <p style={{color:'var(--muted)', margin:'-10px 0 20px 0'}}>— Your health is our priority.</p>
        
        {/* Doctor Info Section */}
        <div style={{display:'flex',gap:24}}>
          {/* Using imported variable DoctorImage */}
          <img src={DoctorImage} alt="doc" style={{width:160,height:160,objectFit:'cover',borderRadius:12}} />
          <div>
            <h3 style={{margin:0}}>{doc.name}</h3>
            <div style={{color:'var(--muted)', fontSize:16}}>{doc.education} • {doc.specialty}</div>
            <div style={{marginTop:8}}>**Designation/Workplace:** {doc.workplace}</div>
            <div>**Experience:** {doc.experience}</div>
            <div>**Registration:** {doc.reg}</div>
            <div style={{marginTop:8,fontWeight:700}}>**Consultation Fee:** ${doc.fee}</div>
          </div>
        </div>
        
        <div style={{marginTop:20}}>
          {/* Availability Section */}
          <h4 style={{marginBottom:8}}>Availability</h4>
          <div>
            {doc.availability.map(day => (
              <span key={day} className="badge" style={{marginRight:8, background:'#e0f2f1', color:'#0f766e'}}>{day}</span>
            ))}
          </div>
        </div>

        {/* Appointment Card includes Book Now Button */}
        <div style={{marginTop:24, padding:16, border:'1px solid #e2e8f0', borderRadius:8}}>
          <h4 style={{margin:0}}>Book Your Session</h4>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:12}}>
            <div className="badge">Available Today</div> {/* Availability Badge */}
            <button className="btn" onClick={handleBook}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}