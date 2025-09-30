import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {value : []},
    reducers: {
        addToCart: function(state, action) {
            if(state.value.some(item => item._id === action.payload._id)) {
                alert("Book already exist in a cart");
                return;
            }
            else {
                state.value.push(action.payload);
                console.log(state.value);
            }
        },
        deletFromCart: function(state, action) {
            const indexToDelete = 
                state.value.findIndex(item => item._id === action.payload._id);
            if(indexToDelete > -1) {
                state.value.splice(indexToDelete, 1);
            }
        }
        
    }
})

export const {addToCart, deletFromCart} = cartSlice.actions;
export default cartSlice.reducer;