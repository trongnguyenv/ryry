import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./cards/card-slice";

export const store = configureStore({
  reducer: {
    cardSlice: cardReducer
  },
});
