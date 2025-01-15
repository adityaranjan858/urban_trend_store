import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
  totalCartitem : 0,
  subTotal: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const existingItemIndex = state.cartItem.findIndex(item => item.id === action.payload.id)
      if(existingItemIndex !== -1){
        const existingItem = state.cartItem[existingItemIndex]
        state.cartItem[existingItemIndex] = {
          ...existingItem,
          rating : {
            ...existingItem.rating,
            count :existingItem.rating.count + 1
          }
        }
      }else{
        state.cartItem.push({ 
          ...action.payload, 
          rating :{
            ...action.payload.rating,
            count : 1
          } });
      }

      state.subTotal = state.cartItem.reduce((acc, curr)=>{
        return acc + (curr.price * curr.rating.count)
      }, 0).toFixed(2)

      state.totalCartitem = state.cartItem.reduce((acc, curr)=> acc + curr.rating.count, 0)
    },

    remove(state, action) {
      state.cartItem = state.cartItem.filter(item => item.id !== action.payload)

      state.subTotal = state.cartItem.reduce((acc, curr)=>{
        return acc + (curr.price * curr.rating.count)
      }, 0).toFixed(2)

      state.totalCartitem = state.cartItem.reduce((acc, curr)=> acc + curr.rating.count, 0)
    },

    incrementQuantity(state, action) {
      state.cartItem = state.cartItem.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            rating: {
              ...item.rating,
              count: item.rating.count + 1
            }
          };
        } else {
          return item;
        }
      });

      state.subTotal = state.cartItem.reduce((acc, curr)=>{
        return acc + (curr.price * curr.rating.count)
      }, 0).toFixed(2)

      state.totalCartitem = state.cartItem.reduce((acc, curr)=> acc + curr.rating.count, 0)
    },   

    decrementQuantity(state, action) {
      state.cartItem = state.cartItem.map(item => {
        if (item.id === action.payload) {
          const newCount = Math.max(1, item.rating.count - 1);
          return {
            ...item,
            rating: {
              ...item.rating,
              count: newCount
            }
          };
        } else {
          return item;
        }
      });

      state.subTotal = state.cartItem.reduce((acc, curr)=>{
        return acc + (curr.price * curr.rating.count)
      }, 0).toFixed(2)

      state.totalCartitem = state.cartItem.reduce((acc, curr)=> acc + curr.rating.count, 0)
    },  

    subTotalPrice(state) {
      state.subTotal = state.cartItem.reduce((acc, curr)=>{
        return acc + (curr.price * curr.rating.count)
      }, 0).toFixed(2)
    },
    }
  });

export const { add, remove, incrementQuantity, decrementQuantity, subTotalPrice } = cartSlice.actions

export default cartSlice.reducer;