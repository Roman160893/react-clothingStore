import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type ClothingItems = {
  id: number;
  category: number;
  type: number;
  description: string;
  hit?: string;
  img: string;
  img1: string;
  img2: string;
  img3: string;
  price: number;
  newprice?: number;
  sale?: string;
  news?: string;
  discount?: string;
  detailedDescription?: string;
};

export interface ClothingSlice {
  items: ClothingItems[];
  status: string;
}

const initialState: ClothingSlice = {
  items: [],
  status: 'loading',
};

export const fetchClothing = createAsyncThunk<ClothingItems[], number | null>(
  'clothing/fetchClothingStatus',
  async (category) => {
    const params = new URLSearchParams();
    params.append('category', category !== 0 ? `${category}` : '');

    const { data } = await axios.get<ClothingItems[]>(
      'https://6358f339ff3d7bddb994bf3f.mockapi.io/items',
      { params },
    );
    return data;
  },
);

export const clothingSlice = createSlice({
  name: 'clothing',
  initialState,
  reducers: {
    setClothing: (state, action: PayloadAction<ClothingItems[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClothing.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchClothing.fulfilled, (state, action: PayloadAction<ClothingItems[]>) => {
      state.status = 'success';
      state.items = action.payload;
    });
    builder.addCase(fetchClothing.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setClothing } = clothingSlice.actions;

export default clothingSlice.reducer;
