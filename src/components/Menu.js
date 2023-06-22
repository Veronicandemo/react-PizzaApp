import React from 'react'
import Pizza from './Pizza'
import './Menu.css'

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingridients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="./pizzas/spinaci.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Spinaci"
        ingridients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="./pizzas/funghi.jpg"
        price={10}
      />
    </main>
  )
}

export default Menu
