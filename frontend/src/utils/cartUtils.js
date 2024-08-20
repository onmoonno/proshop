// Helper function for prices to 2 decimals
export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Calculate tax price (15% tax)
  state.taxPrice = addDecimals(Number(state.itemsPrice * 0.15));

  // Calculate shipping price, if order is over $100 then free, else $10 shipping
  state.shippingPrice = addDecimals(Number(state.itemsPrice > 100 ? 0 : 10));

  // Calculate total price
  state.totalPrice = addDecimals(
    Number(state.itemsPrice) +
      Number(state.shippingPrice) +
      Number(state.taxPrice)
  );

  // Save to localStorage
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
