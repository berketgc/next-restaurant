import React from 'react'
import Navbar from '../components/Navbar'

const LoginLayout = ({ children }) => {
  return (
    <div className=' bg-repeat bg-auto h-screen '  style={{ backgroundImage: "url('/images/yellow.jpg')" }}>
     
        {children}
    </div>
  )
}

export default LoginLayout