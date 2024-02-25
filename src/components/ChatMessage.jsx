import React from 'react'
import { User2Icon } from "lucide-react";
const ChatMessage = (messages) => {
    const {name,message}=messages
  return (
    <><div className='flex  items-center shadow-md p-2'>
          <User2Icon />
          <div>
              <span className='px-2 font-bold'>{name}</span>:
              <span>{message}</span>
          </div>
      </div></>
  )
}

export default ChatMessage