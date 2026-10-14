import { createSlice } from "@reduxjs/toolkit";


export const wishlistSlice = createSlice({
    name : 'wishlist' ,
    initialState : [] ,
    reducers : {
        addToWishList : (state , action)=> {
            if(state.find((item)=>item.id == action.payload.id)){
                alert('Already in wishlist')
            }
            else {
                state.push(action.payload)
            }

        },
        removeItemWishList : (state , action)=>{
            return state.filter((item)=>item.id != action.payload)

        }
    }
})

export const {addToWishList , removeItemWishList} = wishlistSlice.actions

export default wishlistSlice.reducer

