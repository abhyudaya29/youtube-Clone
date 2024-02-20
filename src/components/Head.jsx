/* eslint-disable no-undef */
import { Menu, CircleUser, Search, SunMoon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenue, toggleTheme } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE__SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const[suggestions,setSuggestions]=useState("")
  const[showSuggestions,setShowSuggestions]=useState(false)
  const dispatch=useDispatch()
  console.log(searchQuery);
  const searchCache=useSelector((store)=>(store.search))


  const getSearhcQuery = async () => {
    try {
      const searchData = await fetch(YOUTUBE__SEARCH_API + searchQuery);
      const searchResponse = await searchData.json();
      console.log(searchResponse[1]);
      setSuggestions(searchResponse[1]);
    //   update in catch
    dispatch(cacheResults({
        [searchQuery]:searchResponse[1]
    }))
    
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    const timer=setTimeout(()=>{
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery]);
        }
        else{
            getSearhcQuery()
        }

    },200)
    return ()=>{
        clearTimeout(timer)
    }

  },[searchQuery])

  

  const toggleMenueHandler = () => {
    dispatch(toggleMenue());
  };
  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  return (
    <>
      <div
        className={
          isDarkTheme
            ? `grid grid-flow-col  p-5 m-2 shadow-lg rounded-lg bg-slate-800 transition-colors duration-500`
            : `grid grid-flow-col p-5 m-2 shadow-lg rounded-sm transition-colors duration-500`
        }
      >
        <div className="flex col-span-1">
          <Menu
            strokeWidth={1.75}
            onClick={toggleMenueHandler}
            className="cursor-pointer"
          />
          <img
            className="youtube-logo h-10 w-13 mx-2 "
            src="data:image/png;base64,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"
            alt=" youtube logo"
          />
        </div>
        <div className="">
          <div className="search-icon flex justify-center col-span-10">
            <input
              className="w-full bg-gray-300 rounded-l-full px-6 "
              type="text"
              placeholder ="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={()=>setShowSuggestions(true)}
              onBlur={()=>setShowSuggestions(false)}
            />

            <button className="bg-gray-200 rounded-r-full px-2 py-3 ">
              <Search strokeWidth={1.75} />
            </button>
          </div>
          {showSuggestions && <div className="fixed bg-white py-5 px-5 w-[30rem] ">
            <ul>
              
              {suggestions && suggestions.map((s)=>(<li key={s}>{s}</li>))}
            </ul>
          </div>}
        </div>
        <div className="user-icon  p-2 flex gap-6 col-span-1">
          <SunMoon
            strokeWidth={1.75}
            onClick={toggleThemeHandler}
            className="cursor-pointer"
          />
          <CircleUser strokeWidth={1.75} />
        </div>
      </div>
    </>
  );
};

export default Head;
