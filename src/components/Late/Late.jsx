import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useEffect } from 'react'
import Items from '../Items/Items'
import'./Late.css'

const Late = () => {
    const  {product_list}= useContext(StoreContext)
   const[WeekProducts,setWeekProducts]=useState([])
   useEffect(()=>{
setWeekProducts(product_list.slice(0,4));
   },[])
  return (
    <div className='proAndIntro'>
            <div className='introduction'>
            <h1>Products of the week</h1>
            <p>Discover this week's top picks, carefully selected to bring style and comfort to your home.Fresh designs and timeless pieces to inspire every room.</p>
      </div>
    <div className='plusieursPro'>
      { 
      WeekProducts.map( (item,index)=>(
        <Items key={index} id={item._id} name={item.name} image={item.image} price={item.price} />))
        }
     
    </div>
    </div>
  )
}

export default Late