import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { loadBookings, saveBookings } from '../utils/storage'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'
import toast from 'react-hot-toast'

export default function Bookings(){
  const [bookings, setBookings] = useState([])
  
  // Load from localStorage on mount (Initial Load/Fallback loader)
  useEffect(()=>{ 
    setBookings(loadBookings()) 
  }, [])
  
  // Save to localStorage when bookings state changes (Persistence)
  useEffect(()=>{ 
    saveBookings(bookings) 
  }, [bookings])

  const cancel = (id, name)=>{ 
    setBookings(bookings.filter(b=> b.id !== id))
    toast.success(`Appointment with Dr. ${name} successfully canceled.`) // Success toast
  }

  // Data for Recharts
  const chartData = bookings.map(b=> ({ name: b.name, value: b.fee }))
  const COLORS = ['#0ea5e9', '#22c55e', '#f97316', '#ef4444', '#8b5cf6', '#14b8a6'];

  return (
    <div className="container">
      <h2>Your Booked Appointments</h2>
      
      {bookings.length===0 ? (
        // No appointments found state
        <div className="card" style={{textAlign:'center', padding:40, marginTop:24}}>
          <h3>No appointments found</h3>
          <p style={{color:'var(--muted)'}}>It looks like you haven't booked any appointments yet.</p>
          <Link to="/"><button className="btn" style={{marginTop:12}}>Go to Homepage</button></Link>
        </div>
      ) : (
        // Show all booked appointments in 1-column format + Chart
        <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:24, marginTop:24}}>
          <div>
            {bookings.map(b=> (
              <div key={b.id} className="card" style={{marginBottom:16}}>
                <div style={{display:'flex',justifyContent:'space-between', alignItems:'flex-start'}}>
                  <div>
                    <h3 style={{margin:0}}>{b.name}</h3>
                    <div style={{color:'var(--muted)', fontSize:14}}>{b.education} • {b.specialty}</div>
                    <div style={{marginTop:8}}>**Fee:** **${b.fee}**</div>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <button className="btn" onClick={()=>cancel(b.id, b.name)} style={{background:'#dc2626'}}>Cancel Appointment</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Recharts Visualization */}
          <div className="card">
            <h3>Appointment Fee Breakdown</h3>
            {/* Conditional display: If no appointments, do NOT show chart */}
            {bookings.length > 0 ? (
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie 
                    data={chartData} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={100} 
                    fill="#8884d8"
                    labelLine={false}
                    label
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`$${value}`, 'Fee']}
                    labelFormatter={(label) => `Doctor: ${label}`}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : null} 
          </div>
        </div>
      )}
    </div>
  )
}