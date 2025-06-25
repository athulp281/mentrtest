import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth-slice";
import cartSlice from "./features/cart-slice";
import productSlice from "./features/product-slice";
import wishlistSlice from "./features/wishlist-slice";
import leadSlice from "./features/lead-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice,
    products: productSlice,
    auth: authSlice,
    lead: leadSlice,
  },
});
