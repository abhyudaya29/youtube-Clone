import { useSelector } from "react-redux";

const Sidebar = () => {
    const isDarkTheme=useSelector((store)=>(store.app.isDarkTheme))
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    if(!isMenuOpen) return null

  return (
    <>
      <div className={isDarkTheme?`p-5  shadow-lg w-48 bg-slate-800 transition-colors duration-500 rounded-sm`:`p-5 shadow-lg w-48 transition-colors duration-500 rounded-sm`}>
        {/* <h1>slider</h1> */}
        <div>
          <h1 className="font-bold">Subscriptions</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            {/* <li></li> */}
          </ul>
        </div>
        <div className="py-5">
          <h1 className="font-bold">watch later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            {/* <li></li> */}
          </ul>
        </div>
        <div className="py-5">
          <h1 className="font-bold">watch later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            {/* <li></li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
