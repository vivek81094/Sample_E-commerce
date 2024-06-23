import { createSlice } from "@reduxjs/toolkit";


const categoryItem=createSlice({
    name: "category",
    initialState: {
        category: 'All',  
    },
    reducers:{
        setCategory: (state, action)=>{
            state.category=action.payload;
        },
    }
})

export const {setCategory}=categoryItem.actions;
export default categoryItem.reducer;