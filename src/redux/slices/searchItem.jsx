import { createSlice } from "@reduxjs/toolkit";

const searchItem = createSlice({
  name: "searchItem",
  initialState: {
    search: "",
  },
  reducers: {
    setSearch: (state, action) => {
        state.search=action.payload
    },
  },
});

export const {setSearch}=searchItem.actions;
export default searchItem.reducer;