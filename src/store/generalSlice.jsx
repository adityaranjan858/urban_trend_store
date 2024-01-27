import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: {
        content: "",
        type: ""
    }
}

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        alertMessage : (state, action)=>{
            state.message.content = action.payload.content
            state.message.type = action.payload.type
        }
    }
});

export const { alertMessage } = generalSlice.actions

export default generalSlice.reducer