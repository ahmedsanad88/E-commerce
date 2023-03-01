/* eslint-disable import/no-extraneous-dependencies */
import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { StaticImageData } from 'next/image';

export interface IFavSliceInitialState {
  id: string;
  title: string;
  subTitle: string;
  price: number;
  image: string | StaticImageData;
}

const initialState: { data: IFavSliceInitialState[] } = {
  data: [],
};

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
const favSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (
      state: Draft<typeof initialState>,
      action: PayloadAction<IFavSliceInitialState>
    ) => {
      if (
        state.data.filter((item) => item.id === action.payload.id).length > 0
      ) {
        return state;
      }
      // eslint-disable-next-line no-param-reassign
      state.data = [...state.data, action.payload];
      return state;
    },
    removeFromFavorite: (
      state: Draft<typeof initialState>,
      action: PayloadAction<string>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.data = state.data.filter(
        (item, _idx) => item.id !== action.payload
      );
    },
    clearFavorite: (state: Draft<typeof initialState>) => {
      // eslint-disable-next-line no-param-reassign
      state.data = [];
    },
  },
});

// A small helper of user state for `useSelector` function.
// export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actions
export const { addToFavorite, removeFromFavorite, clearFavorite } =
  favSlice.actions;

export default favSlice.reducer;
