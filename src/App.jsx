
import './App.css'
import Head from './components/Head'
import Body from './components/Body'
import { useSelector } from 'react-redux'
// import store from '../utils/store'
function App() {
  const isDarkTheme=useSelector((store)=>(store.app.isDarkTheme))
  

  return (
    <>
    {/* <div className={isDarkTheme?`bg-slate-800`:`bg-white`}> */}
    <Head/>
    <Body/>
    {/* </div> */}
    </>
  )
}

export default App
