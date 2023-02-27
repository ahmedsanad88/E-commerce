import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { AllOptions } from '@/ui/sections/user-profile/UserSidebar';

export interface IuserSidebarSliceInitialState {
  selectedOption: AllOptions;
}

const initialState: IuserSidebarSliceInitialState = {
  selectedOption: 'Personal Information',
};

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
const userSidebarSlice = createSlice({
  name: 'userSidebar',
  initialState,
  reducers: {
    changeOption: (
      state: Draft<typeof initialState>,
      action: PayloadAction<IuserSidebarSliceInitialState>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedOption = action.payload.selectedOption;
    },
  },
});

// A small helper of user state for `useSelector` function.
export const getUserSidebarState = (state: {
  userSidebarSlice: IuserSidebarSliceInitialState;
}) => state.userSidebarSlice;

// Exports all actions
export const { changeOption } = userSidebarSlice.actions;

export default userSidebarSlice.reducer;
