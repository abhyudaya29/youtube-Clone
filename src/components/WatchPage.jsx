import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenue } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenue());
  }, []);
  return (
    <>
      <div className="flex flex-col w-full">
      <div className="px-5 flex h-screen w-full">
        <iframe
          width="1800"
          height="400"
          src={"https://www.youtube.com/embed/"+searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
         <div className="w-full">
        <LiveChat/>
      </div>
      </div>
     
      <CommentsContainer/>
      </div>
    </>
  );
};

export default WatchPage;
