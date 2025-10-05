import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    initialState: { value : {
        "name": "",
        "email" : "",
        "role" : ""
    }},
    name: 'user',
    reducers: {
        setUserGlobal: function(state, action) {
            state.value = action.payload;
        }
    }
})

export const {setUserGlobal} = userSlice.actions;
export default userSlice.reducer;