import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "cardSlice",
  initialState: {
    cardList: [],
  },
  reducers: {
    setCardList: (currentSlice, action) => {
      currentSlice.cardList = action.payload;
    },
  },
});

export const cardReducer = cardSlice.reducer;
export const { setCardList } = cardSlice.actions;
