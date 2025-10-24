import React from 'react'
import './Contact.css'
import Barseule from '../../components/Barseule/Barseule'
import { assets } from '../../assets/assets'
const Contact = () => {
  return (
    <div className='Contact'>
     <div className='gauche-div'>
      <div className='call'>
        <div className='titre'>
        <img src={assets.call} alt="call icon" />
        <h3>Call To Us</h3>
        </div>
        <div className='txt' id='txt1'>
        <p>we are available 7/24,7 days a week</p>
      <p>Phone:+1 333 555 678</p>
      <p>Adress:123 Main Street, New York, USA</p> </div>
      </div>
<hr />
      <div className='write'>
           <div className='titre'id='titre2'>
       <img src={assets.message} alt="message icon" />
<h3>Write To Us</h3>
</div>
 <div className='txt' >
<p>Fill out our form and we will contact you within 24 hours</p>
    <p>emails:support@soudemy.com</p> 
    <p>emails:customer@soudemy.com</p>
    </div>
      </div>
      </div> 
      <div className='droite-div'>
        <input className='input' type="text" placeholder="Your Name"  />
          <input type="text" className='input' placeholder="Your Email" />
            <input type="text" className='input' placeholder="Your Phone" />
              <input type="text" className='input1' placeholder="Your Massage" />
                <button className='bton'>send Massage</button>
        </div>  
    </div>
  )
}

export default Contact