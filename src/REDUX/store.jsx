import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Components/Cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
