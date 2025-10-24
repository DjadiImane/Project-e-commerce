import React, { useContext, useState } from 'react'
import'./Items.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Items = ({id,image,name,price}) => {
    const  {dollar}= useContext(StoreContext)
  return (
    ///*pour que quand il clique sur cette element il va le rammener vers une page avec cette path*/
 <Link  className='link' to={`/product/${id}`}>
    <div className='Products'>
      <div className='container'>
        <img className='img' src={image[0]} alt="" />
         <div className="overlay">
    <div className="text"> Click to view more!</div>
  </div>
        </div>
        <div className='desc'>
          <p className='name'>{name}</p>
          <p className='price'>{price}$</p>
        </div>
    </div>
    </Link>
  )
}

export default Items