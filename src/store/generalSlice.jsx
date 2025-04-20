import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: {
        content: "",
        type: ""
    },
    visible : false
}

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        alertMessage : (state, action)=>{
            state.message.content = action.payload.content
            state.message.type = action.payload.type
        },
        setVisible : (state, action)=>{
            state.visible = action.payload
        }
    }
});

export const { alertMessage, setVisible } = generalSlice.actions

export default generalSlice.reducer