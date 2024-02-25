import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";
const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]

    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(OFFSET_LIVE_CHAT,1)
            state.messages.unshift(action.payload)
            // the data will be puched from action.payload to the  array of messages in our state 
        }

    }
})

export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer