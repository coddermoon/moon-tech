import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cart:[],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{

        addToCart : (state,action)=> {
            const selectedProduct = action.payload
            
            if(selectedProduct)
            state.cart.push({...action.payload,count:1})
        }

    },
})

export const {addToCart}= cartSlice.actions
export default cartSlice.reducer