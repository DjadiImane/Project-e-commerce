import React from 'react'
import './WeekProducts.css'
import { week_list } from '../../assets/assets'

import { useState } from 'react'
const WeekProducts = () => {
  
  return (
    <div className='weekpro'>
      <div className='introduction'>
      <h1>Products of the week</h1>
      <p>Discover this week's top picks, carefully selected to bring style and comfort to your home.Fresh designs and timeless pieces to inspire every room.</p>
</div>
<div className='week-list-items'>
  {week_list.map((item,index)=>{
    return(
    <div key={index} className="items" >
      <img src={item.image} alt="product-image" />
      <div className='descreptionItems'>
      <p>{item.name}</p>
      <p>{item.price}</p>
      </div>
    </div>)
      }
      )
      }
</div>
    </div>
  )
}

export default WeekProducts