import React from 'react'
import './Footer.css'

const Footer = () => {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen)
  //   if () alert(`We're currently open`)
  //   else alert(`Sorry we're closed`)
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.We're currently open
    </footer>
  )
}

export default Footer
