import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        isDarkTheme:false
    },
    reducers:{
        toggleMenue:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        toggleTheme:(state)=>{
            state.isDarkTheme=!state.isDarkTheme
        },
        closeMenue:(state)=>{
            state.isMenuOpen=false;
        }
    }
})


export const {toggleMenue,toggleTheme,closeMenue}=appSlice.actions
export default appSlice.reducer