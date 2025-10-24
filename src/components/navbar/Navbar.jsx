import React, { useContext, useState } from 'react'
import{motion}from'framer-motion'
import'./Navbar.css'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import Search from '../Search/Search'

const Navbar = () => {
  const [line,setLine]=useState("Home")
    const{getCartCount}=useContext(StoreContext)

  return (
   <div className='head-dev'>
       <div className='navba'>
    <p>soudemy</p>
       <div className='navbar_menu'>
        <NavLink className='navlink' to={`/home`}><p onClick={()=>{setLine("Home")}}className={line==="Home"?"yes":""}>Home</p></NavLink>
       <NavLink className='navlink' to={`/Shop`}> <p onClick={()=>{setLine("Shop")}} className={line==="Shop"?"yes":""}>Shop</p></NavLink>
         <NavLink className='navlink' to={`/about-us`}><p onClick={()=>{setLine("About Us")}}  className={line==="About Us"?"yes":""}>About Us</p></NavLink>
         <NavLink className='navlink' to={`/contact`}><p  onClick={()=>{setLine("Contact Us")}} className={line==="Contact Us"?"yes":""}>Contact us</p></NavLink>
       </div>
       <div className='icons_di'>
      <img src={assets.search} alt="search_logo" />
      <NavLink to='/cart'>
      <div  className='cart_div'>
        <img src={assets.cartlogo} alt="cart_logo" />
        <div className='top'><p>{getCartCount()}</p></div>
      </div>
      </NavLink>
      <div>
          <NavLink to='/login'className='link'><button>Sign in</button></NavLink>
      </div>
       </div>
       </div> 
        <motion.div className='second-div'  animate={{x:100,scale:1}} initial={{scale:0}} transition={{type:'tween', duration:0.8}}
       >
       
       <h1>All for your home</h1>
        <p>Discover stylish and comfortable furniture to make your home truly yours. Explore our collection and find pieces that match your lifestyle</p>
        <Link to='/Shop'><button className='btn'>view more </button></Link>
    </motion.div>

</div>  
  )
}

export default Navbar