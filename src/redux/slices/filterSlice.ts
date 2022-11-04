import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterSlice {
  category: number | null;
  type: number | null;
  categoryName: string[];
}

const initialState: FilterSlice = {
  category: null,
  type: null,
  categoryName: ['Всі товари', 'Для чоловіків', 'Для жінок'],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number | null>) => {
      state.category = action.payload;
    },
    setType: (state, action: PayloadAction<number | null>) => {
      state.type = action.payload;
    },
  },
});

export const { setCategory, setType } = filterSlice.actions;

export default filterSlice.reducer;
