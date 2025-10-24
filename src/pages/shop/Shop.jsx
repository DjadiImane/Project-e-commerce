import React, { useContext, useEffect, useState } from 'react'
import'./Shop.css'
import Barseule from '../../components/Barseule/Barseule'
import { Link } from 'react-router-dom';
import Items from '../../components/Items/Items';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
const Shop = () => {
   
   const {product_list,showSearch,setShowSearch,search,setSearch}=useContext(StoreContext);
   const[product,setProduct]= useState([])
      const[category,setCategory]= useState([])
      const[sortType,setSortType]=useState('relavant')
   useEffect(()=>{
setProduct(product_list)
   },[])
  const filterByCategory=(e)=>{
if(category.includes(e.target.value)){
  const prev= category.filter((item)=>(item!==e.target.value))
setCategory(prev)

}else{
  setCategory([...category,e.target.value])
}
 }
 const filter=()=>{
   var productcopie=product_list.slice();
  if(showSearch && search){
productcopie=productcopie.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
  }

 if(category.length>0){
  productcopie=productcopie.filter(item=>(category.includes(item.category)))
}
 setProduct(productcopie)
}
const sort=()=>{
var sortpro=product.slice();
 switch(sortType){
  case'low-high':
 setProduct(sortpro.sort((a,b)=>(a.price - b.price)));
 break;
  case'high-low':
  setProduct(sortpro.sort((a,b)=>(b.price - a.price)));
  break;
  default:
    filter();
    break;
}
}
useEffect(()=>{
filter()
},[category,search,showSearch])
 useEffect(()=>{
sort()
 },[sortType])
  return (
   <div  className='mainDiv'>
    <div className='partieGauche'>
      {/* <form>
      <input className='search' type="text" placeholder='Search...' />

      </form> */}
      <div className='Category'>
         <h4>Category</h4>
        <label> <input  onChange={(event)=>filterByCategory(event)} type="checkbox" value='Chair'/>Chair</label>
     <label><input onChange={(event)=>filterByCategory(event)} type="checkbox" value='Lamp'/>Lamp</label>
     <label><input onChange={(event)=>filterByCategory(event)} type="checkbox" value='Office'/>Office</label>
        <label><input onChange={(event)=>filterByCategory(event)} type="checkbox" value='Pot'/>Pot</label>
      <label> <input onChange={(event)=>filterByCategory(event)}  type="checkbox" value='Sofa'/>Sofa</label>
      <label> <input onChange={(event)=>filterByCategory(event)}  type="checkbox" value='Table'/>Table</label> 
          <label><input onChange={(event)=>filterByCategory(event)} type="checkbox" value='Carpet'/>Carpet</label> 

      </div>
    </div>
    <div className='partieDroite'>
      <div className='sort'>
<select onChange={(e)=>setSortType(e.target.value)} className='select'>
   <option value="relavent">Sort by:Relavent</option>
     <option value="low-high">Sort by:Low to High</option>
       <option value="high-low">Sort by:High to Low</option>
</select>
      </div>
    <div className='pro'>{
       product.map(
        (item,index)=>(<Items key={index} id={item._id} name={item.name} image={item.image} price={item.price} />))
        }
     </div>
     </div>
    </div>
  )
}


export default Shop