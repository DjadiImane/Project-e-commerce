import React, { useContext, useEffect } from 'react'
import'./Related.css'
import { StoreContext } from '../../context/StoreContext'
import Items from '../Items/Items'
import { useState } from 'react'
const Related = ({category,id}) => {
    const[relate,setRelate]=useState([])
const{ product_list}=useContext(StoreContext)
 const categoryProduct=product_list.filter((item)=>
        (item.category===category)&&(item._id!==id)
    )
   const partiecatproduct=categoryProduct.slice(0,4) 

  return (
    <div className='related'>
{partiecatproduct.map((item,index)=>
<Items  key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
)}
    </div>
  )
}

export default Related