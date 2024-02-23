import { configureStore,createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name:'counter',
  initialState:{counterVal: 0},
  reducers:{
    increment:(state)=>{
      state.counterVal++;
    },

    decrement:(state)=>{
      state.counterVal--;
    },

    add:(state,action)=>{
      state.counterVal += Number(action.payload.num);
    },
  }
})

const privacySlice = createSlice({
  name: 'privacy',
  initialState: false,
  reducers: {
    toggle: (state) => {
      return !state;
    },
  },
});
 
const counterStore = configureStore({
  reducer:{
  counter:counterSlice.reducer,
  privacy:privacySlice.reducer
  }
});


export default counterStore;
 
export const { toggle: privacyToggle } = privacySlice.actions;

export const counterActions = counterSlice.actions;