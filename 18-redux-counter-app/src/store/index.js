// Import statements different in react
// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// export const INCREMENT = "increment";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // doesn't need action
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // can accept action
      // we use action.payload
      state.counter = state.counter + action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };


// const store = createStore(counterReducer);
const store = configureStore({
  // reducer: { counter: counterSlice.reducer },
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
