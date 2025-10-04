
import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import DoctorDetails from './pages/DoctorDetails'
import Bookings from './pages/Bookings'
import Blogs from './pages/Blogs'
import ErrorPage from './pages/ErrorPage'
import { doctors } from './data/doctors'

// Helper to set the dynamic title
const getPageTitle = (pathname, doctorId) => {
  if (pathname === '/bookings') return 'Your Bookings | MediCare'
  if (pathname.startsWith('/doctors/') && doctorId) {
    const doc = doctors.find(d => d.id === doctorId)
    return doc ? `${doc.name} | MediCare` : 'Doctor Not Found | MediCare'
  }
  if (pathname === '/') return 'MediCare - Book trusted doctors'
  if (pathname === '/blogs') return 'Blogs | MediCare'
  return 'Page Not Found | MediCare'
}

export default function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  
  // Set Dynamic Title (Optional Feature)
  useEffect(() => {
    // Extract doctorId if on the details page
    const doctorId = location.pathname.startsWith('/doctors/') 
      ? location.pathname.split('/').pop() 
      : null
    
    document.title = getPageTitle(location.pathname, doctorId)
  }, [location.pathname])

  // Show Loading Animation on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true)
      const timer = setTimeout(() => setIsLoading(false), 500) // Show loader for 0.5s
      return () => clearTimeout(timer)
    }
    
    // Simple way to detect location change:
    handleRouteChange()
  }, [location.pathname])

  // Check if current route should hide the footer
  const hideFooter = location.pathname === '/404' // Assuming ErrorPage is reached via a catch-all * or /404

  return (
    <>
      <NavBar />
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
      {!hideFooter && <Footer />} {/* Footer visibility check */}
    </>
  )
}