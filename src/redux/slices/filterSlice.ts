import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterSlice {
  category: number | null;
  categoryName: string;
  type: number | null;
}

const initialState: FilterSlice = {
  category: null,
  type: null,
  categoryName: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number | null>) => {
      state.category = action.payload;
    },
    setName: (state, action) => {
      state.categoryName = action.payload;
    },
    setType: (state, action: PayloadAction<number | null>) => {
      state.type = action.payload;
    },
  },
});

export const { setCategory, setName, setType } = filterSlice.actions;

export default filterSlice.reducer;
