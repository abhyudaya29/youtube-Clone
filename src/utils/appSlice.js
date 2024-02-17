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
        }
    }
})


export const {toggleMenue,toggleTheme}=appSlice.actions
export default appSlice.reducer