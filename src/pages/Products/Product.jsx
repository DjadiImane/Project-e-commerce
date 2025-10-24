import React, { useContext, useEffect, useState } from 'react'
import'./Product.css'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import Related from '../../components/related/Related'
const Product = () => {
  const{id}=useParams()
  const [product,setProduct]=useState(false)
  const{product_list,addToCart}=useContext(StoreContext)
const[clicked,setClicked]=useState("desc")
const productexist = async () => {
product_list.find((item)=>{
  if(item._id=== id){
  setProduct(item)
  }
})
}
useEffect(
 ()=>{productexist()},
[id,product_list])
  return product? (
    <div className='prod'>
    
      {/* *********************************partie gauche************************************ */}
    <div className='partie_gauche'>
<img src={product?.image[0]} alt="product photo" />
</div>
{/************************************** * partie droite ************************************** */}
<div className='partie_droite'>
  <h1>{product?.name}</h1>
  <div className='stars'>
<img src={assets?.starJaune} alt="star icon"/>
<img src={assets?.starJaune} alt="star icon"/>
<img src={assets?.starJaune} alt="star icon"/>
<img src={assets?.star} alt="star icon"/>
<p> {product?.stock} </p>
</div>

<h4>{product?.price}$</h4>
<p className='DISC'>{product?.description}</p>
<button onClick={()=>addToCart(product._id)}>Add to Cart</button>
<div className='milieu-item'>
  <h4  onClick={()=>{setClicked("desc")}} className={clicked==="desc"?"yes":""}>description</h4>
  <h4  onClick={()=>{setClicked("info")}} className={clicked==="info"?"yes":""}>additional information</h4>
  <h4  onClick={()=>{setClicked("preview")}} className={clicked==="preview"?"yes":""}>preview</h4>
</div>
<div  className='milieu'>
{clicked==="desc"? (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim et volutpat lobortis enim donec adipiscing nibh. Consectetur in ac elementum aliquam imperdiet tellus.</p>)
:null}
{clicked==="info"? (<p>r adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum</p>)
:null}
{clicked==="preview"? (<p>Lorem ipsum dolor sit ametdolor sit amet, consectetur adipiscing elit. Enim et volutpat lobortis enim donec a</p>)
:null}
</div>
    </div>
  
    {/* ****************************related product**************************************************** */}
    <div className='related-product'>
<h1>Related Products</h1>
<Related  category={product.category} id={product._id} />
    </div>
    </div>
  ):null
}
export default Product