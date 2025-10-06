# 🏥 Medical Appointment Booking Application

A **React + Vite** web application for scheduling and managing doctor appointments.  
It includes multiple pages, interactive UI, routing, charts, and local data persistence.

---

## 🌐 Live Demo & Repository

🚀 **Live Website:** [https://MedicalAppointmentBookingApplication.surge.sh](https://MedicalAppointmentBookingApplication.surge.sh)  
💻 **GitHub Repository:** [https://github.com/Shariarx6T9/practice](https://github.com/Shariarx6T9/practice)

---

## 🔝 Features Overview

### 🧭 Navbar
- Always visible on all routes (including invalid ones)  
- Includes logo, site name, 4 navigation menus, and a right-side button  

### 🦶 Footer
- Visible on all pages except the error page  
- Includes centered logo, navigation menus, and 3 social icons  

### 🏠 Homepage
- Gradient banner with border and centered heading/text  
- 6 doctor cards initially (3×2 grid)  
- “Show All” button loads all 12 doctor cards  
- Success section with 4 statistic cards using **react-countup**  

### 👨‍⚕️ Doctor Details Page
- Doctor profile section with full details (image, education, specialty, etc.)  
- Availability days displayed  
- “Book Now” button logic:
  - ✅ Creates appointment and redirects to Booking page (if not already booked)  
  - ❌ Shows error toast if already booked  

### 📅 Bookings Page
- Lists all booked appointments in single-column layout  
- Cancel button removes appointment and updates chart  
- Data stored in **localStorage** for persistence  
- Shows fallback message if no appointments exist  

### 📝 Blogs Page
Answers the following React questions:
1. What is `useState` and how does it work?  
2. What is the purpose of `useEffect`?  
3. What is a custom hook and when to use it?  
4. Controlled vs uncontrolled components  
5. Explanation of `useFormStatus()`  

### ⚠️ Error Page
- Displayed for invalid routes  
- Navbar visible, footer hidden  
- Redirect button to homepage  

---

## 📊 Charts & Animations

- **Recharts:** Visualizes total appointment fees  
- Auto-updates on appointment cancellation  
- **React CountUp:** Adds smooth counting animations  

---

## ✨ Additional Features
- Dynamic titles using `useLocation()`  
- Loading animation during route changes  
- Responsive design for all devices  
- Proper fallback and error handling  

---

## ⚙️ Tech Stack

| Category | Technologies Used |
|-----------|------------------|
| Frontend | React, Vite, JSX |
| Routing | React Router DOM |
| Charts | Recharts |
| Notifications | React Hot Toast |
| Animations | React CountUp |
| Deployment | Surge.sh |
| Styling | CSS (as per Figma) |

---

## ✅ Project Notes
- Minimum 10 commits  
- No Lorem Ipsum  
- All images are relevant and optimized  
- Matches Figma layout and responsive design  

---

💡 *Developed by Shuvro with care and clean code.*
