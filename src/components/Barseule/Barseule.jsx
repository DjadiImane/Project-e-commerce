import React, { useContext } from 'react'
import './Barseule.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Barseule = () => {
    const{showSearch,setShowSearch,getCartCount}=useContext(StoreContext)
      const [line,setLine]=useState("Home")
  return (
         <div className='navbar'>
      <Link to='/'className='link'><p>soudemy</p></Link> 
          <div className='navbar_menu'>
           <NavLink to='/Home'className='link'><p onClick={()=>{setLine("Home")}}className={line==="Home"?"oui":""}>Home</p></NavLink>
         <NavLink to='/shop'className='link'> <p onClick={()=>{setLine("Shop")}} className={line==="Shop"?"oui":""}>Shop</p></NavLink>
          <NavLink to='/about-us'className='link'> <p onClick={()=>{setLine("About Us")}}  className={line==="About Us"?"oui":""}>About Us</p></NavLink>
          <NavLink to='/contact'className='link'> <p  onClick={()=>{setLine("Contact Us")}} className={line==="Contact Us"?"oui":""}>Contact us</p></NavLink>
          </div>
          <div className='icons_div'>
         <img  onClick={()=>{setShowSearch(true)}} src={assets.search} alt="search_logo" />
         <NavLink to='/cart'>
         <div className='cart_div'>
           <img src={assets.cartlogo} alt="cart_logo" />
           <div className='top'><p>{getCartCount()}</p></div>
         </div>
         </NavLink>
         <div>
            <NavLink to='/login'className='link'><button>Sign in</button></NavLink>
         </div>
          </div>
          </div>
  )
}

export default Barseule