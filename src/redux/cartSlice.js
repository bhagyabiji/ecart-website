import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addToCart : (state , action)=> {
            if(state.find((item)=> item.id == action.payload.id)){
                alert('Already in Cart')
            }
            else {
                state.push(action.payload)
            }
        },
        removeFromCart : (state , action)=> {
            return state.filter((item)=>item.id != action.payload)
        },
        emptyCart : (state)=> {
            return state = []
        }
    }
})

export const { addToCart , removeFromCart , emptyCart} = cartSlice.actions

export default cartSlice.reducer



