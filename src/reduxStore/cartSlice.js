import { createSlice } from "@reduxjs/toolkit";
const cartSlice= createSlice({
    name:"cart",
    initialState:{items:["apple pie", "choco sauce icecream"]},
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload)
        }},
        deleteItem:(state)=>{
            state.items.pop()
        },
        emptyCart:(state)=>{
            state.items.length=0
        }
    }
)
export const {addItem, deleteItem, emptyCart}=cartSlice.actions
export default cartSlice.reducer