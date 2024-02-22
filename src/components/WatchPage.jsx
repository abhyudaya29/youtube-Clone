import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenue } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenue());
  }, []);
  return (
    <>
      <div>
      <div className="px-5 flex h-screen">
        <iframe
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/"+searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer/>
      </div>
    </>
  );
};

export default WatchPage;
