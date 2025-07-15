import { createSlice, current } from "@reduxjs/toolkit";
const cartSlice= createSlice({
    name:"cart",
    // initialState:{items:[{name:"biriyani", star:"5"}, {id:"looloo", name:"chocos", star:"4"}]},
        initialState:{items:[]},
    reducers:{
        addItem:(state, action)=>{
            // state.items.map((itemm, index)=>{
            //     console.log("inside slice", itemm)
            // })
            state.items.push(action.payload)
            // console.log("inside cart slice state.items", current(state))
            // console.log("====action.payload", action.payload)
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