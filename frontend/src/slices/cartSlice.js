import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

// Helper function for prices to 2 decimals
const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      // Calculate items price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      // Calculate tax price (15% tax)
      state.taxPrice = addDecimals(Number(state.itemsPrice * 15));

      // Calculate shipping price, if order is over $100 then free, else $10 shipping
      state.shippingPrice = addDecimals(
        Number(state.itemsPrice > 100 ? 0 : 10)
      );

      // Calculate total price
      state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice)
      );

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

// Export functions as a action
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
