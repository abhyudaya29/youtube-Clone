
import './App.css'
import Head from './components/Head'
import Body from './components/Body'
import { useSelector } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
// import store from '../utils/store'

const appRouter=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<MainContainer/>
    },
    {
      path:'/watch',
      element:<WatchPage/>
    }
  ]

}])
function App() {
  const isDarkTheme=useSelector((store)=>(store.app.isDarkTheme))

  

  return (
    <>
    <div className={isDarkTheme?`bg-slate-800`:`bg-white`}>
    <Head/>
    <RouterProvider router={appRouter}/>
    </div>
    </>
  )
}

export default App
