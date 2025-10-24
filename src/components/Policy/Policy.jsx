import React from 'react'
import './Policy.css'
import { assets } from '../../assets/assets'
const Policy = () => {
  return (
<div>
        <div className='Order'>
            <p>Order now for an express delivery in 24h !</p>
            <button>View more!</button>
        </div>
            <div className='Policy'>
<div className='item'>
<img src={assets.Online} alt="shope online icon" />
<div className='desc'>
<h4>Shope online</h4>
<p>Lorem ipsum dolor sit amet, </p>
</div>
</div>
    <div className='item'>
<img src={assets.exchange} alt="exchange" />
<div className='desc'>
<h4>Easy Exchange Policy</h4>
<p>We offer hassle free exchange policy</p>
</div>
</div>
  <div className='item'>
<img src={assets.Return} alt="return" />
<div className='desc'>
<h4>7 Days Return Policy</h4>
<p>We offer 7 days free return policy</p>
</div>
</div>
 <div className='item'>
<img src={assets.payment} alt="payment icon" />
<div className='desc'>
    <h4>Payment</h4>
<p>We offer 7 days free return policy</p>
</div>

</div>
    </div>
    </div>
  )
}

export default Policy