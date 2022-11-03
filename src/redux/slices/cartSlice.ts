import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalCount, calcTotalPrice } from '../../assets/function';

export type CartItem = {
  id: number;
  description: string;
  img: string;
  price: number;
  newprice?: number;
  count: number;
};

export interface CartSlice {
  cartItems: CartItem[];
  totalPrice: number;
  totalCount: number;
}

const initialState: CartSlice = {
  cartItems: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartItem>) => {
      const findProduct = state.cartItems.find((obj) => obj.id === action.payload.id);

      if (findProduct) {
        findProduct.count++;
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.cartItems);
      state.totalCount = calcTotalCount(state.cartItems);
    },
    plusProduct: (state, action: PayloadAction<number>) => {
      const findProduct = state.cartItems.find((obj) => obj.id === action.payload);
      if (findProduct) {
        findProduct.count++;
      }
      state.totalPrice = calcTotalPrice(state.cartItems);
      state.totalCount = calcTotalCount(state.cartItems);
    },
    minusProduct: (state, action: PayloadAction<number>) => {
      const findProduct = state.cartItems.find((obj) => obj.id === action.payload);
      if (findProduct) {
        findProduct.count--;
      }
      state.totalPrice = calcTotalPrice(state.cartItems);
      state.totalCount = calcTotalCount(state.cartItems);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.cartItems);
      state.totalCount = calcTotalCount(state.cartItems);
    },
    clearProduct: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const { addProduct, plusProduct, minusProduct, removeProduct, clearProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
