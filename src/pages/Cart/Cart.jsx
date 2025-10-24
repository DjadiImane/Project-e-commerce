import React, { useEffect } from 'react'
import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Cart = () => {
  const{product_list,cartItems,deleteed}=useContext(StoreContext)
  const[cart,setCart]=useState([]);

const cartShow=()=>{   
   const tempData=[];
for(const items in cartItems){
  if(cartItems[items] >0){
    tempData.push({
      _id:items,
       quantity:cartItems[items]
  })
  }
}setCart(tempData)}
  useEffect(()=>{
cartShow()
},[cartItems])
  return (
    <div>
      <div className='titree'>
        <h1>Your Cart</h1>
      </div>
       
      {cart.map((item,index)=>{
       const proocart=product_list.find((it)=>it._id===item._id)
       return(

  <div key={index} className='elements_choix'>
  <Link to={`/product/${item._id}`} className='link'> <div className='img_infoos'>
  <img src={proocart.image[0]} alt="" />
  <div className='infoos'> 
 <h3>{proocart.name}</h3>
 <p>{proocart.price}$</p>
  </div>
  </div>
     </Link>
 <div className='num_del'>
 <input onChange={(e)=>{e.target.value==='0'? deleteed(item._id,0):deleteed(item._id,Number(e.target.value))}} type="number" min={1} Value={item.quantity}/>
 <img  onClick={()=>{deleteed(item._id,0)}} src={assets.delet} alt="" />
 </div> 

  </div>

      )})}
 </div>
   
  )
}

export default Cart