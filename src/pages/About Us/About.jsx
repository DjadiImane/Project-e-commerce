import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'
import Policy from '../../components/Policy/Policy'
const About = () => {
  return (
    <div className='About'>
    <div className='Photo-haut'> 
      <div className='photo'>
      <img src={assets.chair3} alt="chair picture" />
      </div>
      <motion.p animate={{scale:1}} initial={{scale:0}} transition={{type:'tween', duration:0.8}}>About Us</motion.p>
    </div>
    <Policy/>
 <div className='desc2' >
  <img src={assets.cuisine} alt="" />
  <div >
  <p>Soudemy was born out of a passion for innovation and a desire to transform the way people furnish and decorate their living spaces.
Our journey began with a simple idea: to create a platform where customers can easily discover, explore, and purchase a wide range of furniture and home décor items — all from the comfort of their homes.
Since our inception, we have worked tirelessly to curate a diverse selection of high-quality products that cater to every style and preference.
From modern furniture and ergonomic desks to stylish chairs, elegant lamps, and decorative accents such as plants and flowers, we offer an extensive collection sourced from trusted brands and suppliers.</p>
 
 <h1>Our mission</h1>
 <p>Our mission at Forever Home is to empower customers with choice, convenience, and confidence.
We are committed to providing a seamless shopping experience that goes beyond expectations — from browsing and ordering to delivery and beyond, helping you create a home you truly love.</p> 
</div> </div>
<div className='milieu'>
    <div className='milieu-gauche'>
    <h1>Functionality meets perfection</h1>
    <p>At Forever Home, we believe that furniture should be more than just functional — it should reflect your personal style and bring comfort to your everyday life.
Our curated collection blends design, quality, and practicality to help you create spaces that truly feel like home.</p>
  </div>
  <div className='milieu-droite'>
     <div className='percentage'>
     
    <p>Creativity</p>
    <p>72%</p>
    </div>
    <div className='div3'>
      <div className='div4'></div>
    </div>
  
       <div className='percentage'>
        
    <p>Advertising</p>
    <p>84%</p>
      </div>
    <div className='div1'>
      <div className='div2'></div>
    </div>
 
       <div className='percentage'>
    <p>desing</p>
    <p>72%</p>
       </div>
    <div className='div3'>
      <div className='div4'></div>
    </div>

  </div>
  </div>
  <div className='Why' >

    <h1>Why choose us</h1>
    
    <div className='paragraphs'>
    <div className='quality'>
<h3>Quality assurance</h3>
<p>We carefully select and inspect every piece of furniture and décor to ensure it meets our strict quality standards.
Each product is chosen for its durability, design, and ability to enhance the beauty and comfort of your home</p>
    </div>
        <div className='conveniece'>
<h3>Conveniece</h3>
<p>With our user-friendly interface and hassle-free ordering process, furnishing and decorating your home has never been easier.
Find everything you need in just a few clicks, without stress or wasted time.</p>
    </div>
        <div className='exeptional'>
<h3>Exceptional Customer service</h3>
<p>Our team of dedicated professionals is here to guide you every step of the way.
From product selection to delivery and after-sales support, your satisfaction is our top priority.</p>
    </div>
</div>
  </div>
  

    </div>
  )
}

export default About