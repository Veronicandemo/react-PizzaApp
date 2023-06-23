import React from 'react'
import './Footer.css'
import Order from './Order'

const Footer = () => {
  const hour = new Date().getHours()
  const openHour = 10
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour
  //   if () alert(`We're currently open`)
  //   else alert(`Sorry we're closed`)
  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <Order openHour={openHour} closeHour={closeHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00
          </p>
        )}
      </div>
    </footer>
  )
}

export default Footer
