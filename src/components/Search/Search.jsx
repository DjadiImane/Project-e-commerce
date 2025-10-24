import React, { useContext } from 'react'
import'./Search.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const Search = () => {
   const {search,setSearch,setShowSearch,showSearch}=useContext(StoreContext)
  return showSearch ?(
    <div className='search-div'>
        <div className='input-div'>
            <input value={search} onChange={(e)=>{setSearch(e.target.value)}}  type="text" placeholder='Search...'/>
            <img onClick={()=>{setShowSearch(false)}} src={assets.close} alt="close icon" />
        </div>
    </div>
  ):null
}

export default Search