import React from 'react'
import Buttonlist from './Buttonlist'
import VideoContainer from './VideoContainer'
import { useNavigate } from "react-router-dom";
const MainContainer = () => {
  
  return (
    
    <>
    {/* <h2>main cintainer</h2> */}
    <div className=''>
    <Buttonlist/>
    <VideoContainer />
    </div>
   
    </>
  )
}

export default MainContainer