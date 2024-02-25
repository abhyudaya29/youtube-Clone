import  { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomMessage, generateRandomName } from '../utils/helper'
const LiveChat = () => {
    const dispatch=useDispatch()
    const chatMessages=useSelector((store)=>(store.chat.messages))
    const[liveMessage,setliveMessage]=useState("")
    const sendMessage=()=>{
        dispatch(addMessage({
            name:"Abhyudaya Dubey",
            message:liveMessage
        }))

    }



    useEffect(()=>{
        const i=setInterval(()=>{
            // API Pooling
            console.log("APi pooling")
            dispatch(addMessage({
                name:generateRandomName(),
                message:generateRandomMessage()
            }))

        },2000)
        return ()=>(clearInterval(i))
    },[])

  return (
   <>
   <div className='w-full h-[500px] ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
   {
    chatMessages.map((messages, index) => (
        <ChatMessage  name={messages.name} message={messages.message} key={index} />
    ))
}
   


   </div>
   <form className='border border-black w-full p-2 ml-2' onSubmit={(e)=>(e.preventDefault())}>
        <input className='w-90' type="text"
        value={liveMessage} onChange={(e)=>{setliveMessage(e.target.value)}}
         />
        <button className='mx-2 px-2 bg-green-100' onClick={sendMessage}>Send</button>
        
    </form>
   
   </>
  )
}

export default LiveChat