import { createSlice } from '@reduxjs/toolkit'

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: {
        selectedCategory: 'SEAFOOD'
    },
    reducers: {
      filteredCategory : (state, action) =>{
        state.selectedCategory = action.payload;
      }
    },
  })
  
  export const getSelectedCategory = state => state.dishes.selectedCategory
  export const { filteredCategory } = dishesSlice.actions
  export default dishesSlice.reducer