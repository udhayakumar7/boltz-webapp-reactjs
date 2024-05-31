import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
    cartQuanty: 0,
    cartTotal: 0,
  },

  reducers: {
    addtoCart: (state, action) => {
      let find = state.cartItems?.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cartItems[find].quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
      state.cartQuanty = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.cartTotal = state.cartItems.reduce((total, item) => total + item.quantity * item.attributes.price, 0);
    },

 
    increaseItemQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      state.cartQuanty = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.cartTotal = state.cartItems.reduce((total, item) => total + item.quantity * item.attributes.price, 0);
    },

      decreaseItemQuantity: (state, action) => {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      state.cartQuanty = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.cartTotal = state.cartItems.reduce((total, item) => total + item.quantity * item.attributes.price, 0);
      },
     
      removeItem: (state, action) => {

         state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);

         state.cartQuanty = state.cartItems.reduce((total, item) => total + item.quantity, 0);
         state.cartTotal = state.cartItems.reduce((total, item) => total + item.quantity * item.attributes.price, 0);
      
      },

      remvoeAll: (state, action) =>{
        state.cartItems=[]
        state.cartQuanty=0
        state.cartTotal=0
      }
  },
});

export const { addtoCart, increaseItemQuantity , decreaseItemQuantity, removeItem,remvoeAll} = CartSlice.actions;

export default CartSlice.reducer;
