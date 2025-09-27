import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    initialState: { user : {}},
    name: 'user',
    reducers: {
        setUser: function(state, action) {
            state.user = action.payload;
        }
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;