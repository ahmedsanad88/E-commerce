/* eslint-disable import/no-extraneous-dependencies */
import type { Store } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';

import cartSlice from './slices/cart-slice/cartSlice';
import favSlice from './slices/fav-slice/favSlice';
import userSidebarSlice from './slices/user-slice/userSidebarSlice';

/**
 * Creates a store and includes all the slices as reducers.
 */
export const store: Store = configureStore({
  reducer: {
    // tableData: tableDataSlice,
    cart: cartSlice,
    userSidebar: userSidebarSlice,
    favorite: favSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { users: UsersState}
type AppDispatch = typeof store.dispatch;

// Since we use typescript, lets utilize `useDispatch`
export const useDispatch = () => useDispatchBase<AppDispatch>();

// And utilize `useSelector`
export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);
