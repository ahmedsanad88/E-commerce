/* eslint-disable import/no-extraneous-dependencies */
import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { StaticImageData } from 'next/image';

export interface ICartSliceInitialState {
  id: string;
  title: string;
  subTitle: string;
  price: number;
  image: string | StaticImageData;
  count: number;
}

const initialState: { data: ICartSliceInitialState[] } = {
  data: [],
};

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state: Draft<typeof initialState>,
      action: PayloadAction<ICartSliceInitialState>
    ) => {
      // eslint-disable-next-line no-param-reassign
      if (
        state.data.filter((item) => item.id === action.payload.id).length > 0
      ) {
        state.data.map((item) => {
          if (item.id === action.payload.id) {
            // eslint-disable-next-line no-param-reassign
            item.count += action.payload.count;
          }
          return state;
        });
      } else {
        // eslint-disable-next-line no-param-reassign
        state.data = [...state.data, action.payload];
      }
    },
    removeFromCart: (
      state: Draft<typeof initialState>,
      action: PayloadAction<string>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.data = state.data.filter(
        (item, _idx) => item.id !== action.payload
      );
    },
    clearCart: (state: Draft<typeof initialState>) => {
      // eslint-disable-next-line no-param-reassign
      state.data = [];
    },
    removeOneProduct: (
      state: Draft<typeof initialState>,
      action: PayloadAction<string>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.data = state.data.filter((item, _idx) => {
        if (item.id === action.payload) {
          if (item.count <= 1) {
            return item.id !== action.payload;
          }
          // eslint-disable-next-line no-param-reassign
          item.count -= 1;
        }
        return item;
      });
    },
  },
});

// A small helper of user state for `useSelector` function.
// export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actions
export const { addToCart, removeFromCart, clearCart, removeOneProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
