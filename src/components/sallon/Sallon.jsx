import React from 'react'
import './Sallon.css'
import { Link } from 'react-router-dom'
const Sallon = () => {
  return (
    <div className='Sallon'>
        
        <p>Discover our collection of elegant and durable tables, designed to complement any space.
Crafted with precision and style, they bring both functionality and beauty to your home.</p>
<Link to='/shop'><button>View More</button></Link>
    </div>
  )
}

export default Sallon