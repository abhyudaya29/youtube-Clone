import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { Outlet } from 'react-router-dom'
const Body = () => {
    const isDarkTheme=useSelector((store)=>(store.app.isDarkTheme))
    
  return (
    <>
     <div className={isDarkTheme?`  bg-slate-800 transition-colors duration-500 rounded-sm`:` bg-white rounded-sm transition-colors duration-500`}>
     <div className='flex'>
        <Sidebar/>
        <Outlet/>
    </div>
     </div>
    </>
  )
}

export default Body