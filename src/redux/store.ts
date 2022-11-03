import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cartSlice from './slices/cartSlice';
import clothingSlice from './slices/clothingSlice';
import filterSlice from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    clothing: clothingSlice,
    filter: filterSlice,
    cart: cartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
