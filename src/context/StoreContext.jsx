import { createContext, useEffect, useState } from "react";
import { assets, product_list } from "../assets/assets";
export  const StoreContext = createContext(null)
const StoreContextProvider =(props)=>{
const[search,setSearch]=useState('')
const[showSearch,setShowSearch]=useState(false)
const[cartItems,setCartItems]=useState({})

const addToCart=(itemId)=>{
    let cartData=structuredClone(cartItems)
    if(cartData[itemId]){
        cartData[itemId]+=1;
    }else{
        cartData[itemId]=1
    }
   setCartItems(cartData);

}
const getCartCount=()=>{
    let totalCount=0;
   for(const items in cartItems){
       if(cartItems[items]>0){
        totalCount+=cartItems[items]
       }
    }
    return totalCount;
}
const deleteed=(id,quantity)=>{
    const deleteData=structuredClone(cartItems)
  deleteData[id]=quantity;
    setCartItems(deleteData)
}
 const contextValue={
   product_list,search,setSearch,setShowSearch,showSearch,
cartItems,addToCart,getCartCount,deleteed
}
return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
)
}
export default StoreContextProvider;