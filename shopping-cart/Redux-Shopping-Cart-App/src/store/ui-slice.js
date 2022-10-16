import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name: "ui",
    initialState: {notification: null},
    reducers:{
        showNotification(state,action){
            state.notification={
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open,
            };
        },
        hideNotification(state,action){
            state.notification=false;
        }
    }

});
export const uiAction= uiSlice.actions;
export default uiSlice;