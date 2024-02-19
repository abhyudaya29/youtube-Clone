
import Buttons from "./Button"
const Buttonlist = () => {
  const list=['All','Sports','Music','News','Gaming','Romance','Cricket','Footbal']
  return (
    <>
    <div className="flex gap-3">
    {list.map((button)=>(<Buttons key={button} Name={button} />))}
    </div>
    
    
    

  
    </>
  )
}

export default Buttonlist