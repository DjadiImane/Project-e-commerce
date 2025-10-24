import React, { useContext, useEffect, useState } from 'react'
import'./BestSeller.css'
import { StoreContext } from '../../context/StoreContext'
import Items from '../Items/Items'
const BestSeller = () => {
    const {product_list}= useContext(StoreContext)
    const [bestSellPro,setBestSellPro]=useState([])
    useEffect(()=>{
const productBest=product_list.filter((item)=>(item.bestSeller))
   setBestSellPro(productBest.slice(0,4))
 } ,[])
  return (
    <div>
          <div className='proAndIntro'>
            <div className='introduction'>
            <h1>Best Sellers</h1>
            <p>Discover thistop picks, carefully selected to bring style and comfort to your home.Fresh designs and timeless pieces to inspire every room.</p>
      </div>
    <div className='plusieursPro'>
      { 
      bestSellPro.map( (item,index)=>(
        <Items key={index} id={item._id} name={item.name} image={item.image} price={item.price} />))
        }
     
    </div>
    </div>
    </div>
  )
}

export default BestSeller