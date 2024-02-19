import { useEffect,useState } from "react"
import { YOUTUBE_API } from "../utils/constants"
import VideoCard from "./VideoCard";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  
  const[video, setVideo] = useState([])
  useEffect(() => {
    getvideos();
  }, []);

 
    const getvideos = async () => {
      const data = await fetch(YOUTUBE_API);
      const response = await data.json();
      console.log(response);
      setVideo(response.items)
    };

   
  return (
    <>
    <div className="flex   flex-wrap justify-between  ">
    {video.map((videoData)=>(
      // eslint-disable-next-line react/jsx-key
      <Link to={"/watch?v="+videoData.id}>
        <VideoCard key={videoData.id} Title={videoData.snippet.title} Thumbnails={videoData.snippet.thumbnails} channelName={videoData.snippet.channelTitle} views={videoData.statistics.viewCount} />
      </Link>
        ))}
      
    </div>
    </>
  )
}

export default VideoContainer