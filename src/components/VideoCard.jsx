import React from 'react'
import { useSelector } from 'react-redux';

const VideoCard = (videoData) => {
    const isDarktheme=useSelector((store)=>(store.app.isDarkTheme))
    const {Title,Thumbnails,channelName,views} = videoData;
  return (
    <>
    {/* <h1>{Title}</h1> */}
    <div className='video-card p-2 m-2 w-72 shadow-lg cursor-pointer'>
        
        <img  className ='rounded-lg' src={Thumbnails.medium.url} alt="video-image" />
        <h3 className={isDarktheme ? 'text-white font-bold p-2' : 'font-bold text-black p-2'}>{Title.slice(0,60)}</h3>
        <h3 className={ isDarktheme? 'm-2 text-white':'m-2 text-black'}>{channelName}</h3>
        <p className={ isDarktheme? 'm-2 text-white':'m-2 text-black'}>{views} views</p>
        
        




    </div>
    </>
  )
}

export default VideoCard