import React, {useState} from 'react'
import { doctors as allDoctors } from '../data/doctors'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'

// 1. IMPORT ALL STATIC ASSETS
import BannerImg from '../assets/banner-img-1.png'
import DoctorPromo from '../assets/doctor-sample.png'
import IconReview from '../assets/success-review.png' // success-review.png
import IconDoctor from '../assets/success-doctor.png' // success-doctor.png
import IconPatients from '../assets/success-patients.png' // success-patients.png
import IconStaffs from '../assets/success-staffs.png' // success-staffs.png


// Helper for Success Icons
const Icon = ({src}) => <img src={src} alt="icon" style={{width:32,height:32, margin:'0 auto 8px auto'}} />


export default function Home(){
  const [limit, setLimit] = useState(6)
  const visible = allDoctors.slice(0, limit)
  
  return (
    <div className="container">
      {/* Banner Section */}
      <section className="card banner" style={{padding:28,display:'grid',gridTemplateColumns:'1fr 320px',gap:24,alignItems:'center'}}>
        <div style={{textAlign:'center'}}>
          <h1 style={{margin:0}}>Book trusted doctors near you</h1>
          <p style={{color:'var(--muted)'}}>Fast, secure appointment booking</p>
          <Link to="/doctors"><button className="btn" style={{marginTop:12}}>Find Doctors</button></Link>
        </div>
        <div style={{textAlign:'center', position:'relative', height:'100%', minHeight:'200px'}}>
          {/* Use imported variables here */}
          <img src={BannerImg} alt="banner" style={{maxWidth:'100%', maxHeight:'100%', borderRadius:12}} /> 
          <img src={DoctorPromo} alt="doctor-promo" style={{
            position:'absolute', bottom:-20, right:-10, width:150, height:'auto', borderRadius: '50%', border:'4px solid white', boxShadow:'0 4px 10px rgba(0,0,0,0.2)'
          }} />
        </div>
      </section>

      {/* Doctors Section */}
      <section style={{marginTop:36}}>
        <h2 style={{textAlign:'center'}}>Our Experienced Doctors</h2>
        <p style={{color:'var(--muted)', textAlign:'center'}}>Experienced professionals — hand-picked</p>
        <div className="grid-3" style={{marginTop:24}}>
          {/* Note: d.image in your data file must be changed to point to the imported asset if you use imports */}
          {/* For simplicity with mapped data, we assume the data stores the correct imported path */}
          {visible.map(d=> (
            <div key={d.id} className="card">
              {/* NOTE: If d.image in src/data/doctors.js is '/assets/doctor-sample.png', you must change it 
                 to import DoctorPromo and use DoctorPromo here, or update the data structure. 
                 For now, keeping the code simple by assuming data is updated, but I'll use DoctorPromo here 
                 for consistency with the provided asset. */}
              <img src={DoctorPromo} alt="doc" style={{width:'100%',height:140,objectFit:'cover',borderRadius:8}} />
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
        
        {/* Show All Button logic */}
        <div style={{textAlign:'center',marginTop:20}}>
          {limit === 6 && allDoctors.length > 6 ? (
            <button className="btn" onClick={()=>setLimit(12)}>Show All ({allDoctors.length} Doctors)</button>
          ) : limit === 12 ? (
            <button className="btn" onClick={()=>setLimit(6)}>Show Less</button>
          ) : null}
        </div>
      </section>

      {/* Success Section */}
      <section style={{marginTop:36}}>
        <h2 style={{textAlign:'center'}}>Our Success Story</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:12,marginTop:20}}>
          {/* Card 1: Reviews */}
          <div className="card success-card">
            <Icon src={IconReview} /> 
            <div style={{fontSize:28,fontWeight:700, color: 'var(--accent)'}}><CountUp end={1200} duration={2} enableScrollSpy />+</div>
            <div style={{color:'var(--muted)', fontSize:14}}>Successful Appointments</div>
          </div>
          {/* Card 2: Doctors */}
          <div className="card success-card">
            <Icon src={IconDoctor} /> 
            <div style={{fontSize:28,fontWeight:700, color: 'var(--accent)'}}><CountUp end={98} duration={2} enableScrollSpy />+</div>
            <div style={{color:'var(--muted)', fontSize:14}}>Expert Doctors</div>
          </div>
          {/* Card 3: Patients */}
          <div className="card success-card">
            <Icon src={IconPatients} /> 
            <div style={{fontSize:28,fontWeight:700, color: 'var(--accent)'}}><CountUp end={15000} duration={2} enableScrollSpy />+</div>
            <div style={{color:'var(--muted)', fontSize:14}}>Happy Patients</div>
          </div>
          {/* Card 4: Staffs */}
          <div className="card success-card">
            <Icon src={IconStaffs} /> 
            <div style={{fontSize:28,fontWeight:700, color: 'var(--accent)'}}><CountUp end={4.8} decimals={1} duration={2} enableScrollSpy /></div>
            <div style={{color:'var(--muted)', fontSize:14}}>Average Rating</div>
          </div>
        </div>
      </section>
    </div>
  )
}