import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
  totalCartitem: 0,
  subTotal: 0
};

const conversionRate = 87.22;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const existingItemIndex = state.cartItem.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        state.cartItem[existingItemIndex].rating.count += 1;
      } else {
        state.cartItem.push({
          ...action.payload,
          rating: {
            ...action.payload.rating,
            count: 1
          }
        });
      }

      // ✅ FIXED: Using Math.round() to avoid floating-point errors
      state.subTotal = Math.round(state.cartItem.reduce((acc, curr) => 
        acc + (curr.price * conversionRate  * curr.rating.count), 0
      ) ).toFixed(2) ;

      state.totalCartitem = state.cartItem.reduce((acc, curr) => acc + curr.rating.count, 0);
    },

    remove(state, action) {
      state.cartItem = state.cartItem.filter(item => item.id !== action.payload);

      // ✅ FIXED: Applied Math.round() here too
      state.subTotal = Math.round(state.cartItem.reduce((acc, curr) => 
        acc + (curr.price * conversionRate * curr.rating.count), 0
      ) ).toFixed(2) ;

      state.totalCartitem = state.cartItem.reduce((acc, curr) => acc + curr.rating.count, 0);
    },

    incrementQuantity(state, action) {
      state.cartItem = state.cartItem.map(item =>
        item.id === action.payload
          ? { ...item, rating: { ...item.rating, count: item.rating.count + 1 } }
          : item
      );

      state.subTotal = Math.round(state.cartItem.reduce((acc, curr) => 
        acc + (curr.price * conversionRate * curr.rating.count), 0
      ) ).toFixed(2) ;

      state.totalCartitem = state.cartItem.reduce((acc, curr) => acc + curr.rating.count, 0);
    },

    decrementQuantity(state, action) {
      state.cartItem = state.cartItem.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            rating: {
              ...item.rating,
              count: Math.max(1, item.rating.count - 1),
            },
          };
        }
        return item;
      });

      state.subTotal = Math.round(state.cartItem.reduce((acc, curr) => 
        acc + (curr.price * conversionRate * curr.rating.count), 0
      ) ).toFixed(2) ;

      state.totalCartitem = state.cartItem.reduce((acc, curr) => acc + curr.rating.count, 0);
    },

    subTotalPrice(state) {
      const subtotal = state.cartItem.reduce((acc, curr) => 
        acc + (curr.price * conversionRate  * curr.rating.count), 0
      );
      state.subTotal = Math.round(subtotal).toFixed(2);
    },
  }
});

export const { add, remove, incrementQuantity, decrementQuantity, subTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
