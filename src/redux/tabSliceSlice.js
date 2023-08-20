import {createSlice} from "@reduxjs/toolkit"

const tabSlice = createSlice({
    name: 'tab',
    initialState: {
      currentTab: 0,
      watchlists: [[]],
    },
    reducers: {
      setTab: (state, action) => {
        state.currentTab = action.payload;
      },
      setWatchlists: (state, action) => {
        state.watchlists = action.payload;
      },
    },
  });
  
  export const { setTab, setWatchlists } = tabSlice.actions;
  export default tabSlice.reducer;
 
  