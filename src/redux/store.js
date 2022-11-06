import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishesSlices'
import cart from './cartSlice'

export const store = configureStore({ 
    reducer: {
        dishes,
        cart
    }

})