import React from 'react'
import'./Home.css'
import Navbar from '../../components/navbar/Navbar'
import WeekProducts from'../../components/weekProducts/WeekProducts'
import Sallon from '../../components/sallon/Sallon'
import BarFin from '../../components/BarFin/BarFin'
import Late from '../../components/Late/Late'
import Policy from '../../components/Policy/Policy'
import BestSeller from '../../components/BestSeller/BestSeller'
const Home = () => {
  return (
    <div className='Home'>
    <div className='navBar'>
    <Navbar/>
    </div>
    <div className='weekProducts'>
    <Late/>
    </div>
    <Sallon/>
    <BestSeller/>
    <Policy/>
   <BarFin/>

    </div>
    
  )
}

export default Home