import { createSlice } from '@reduxjs/toolkit';

const initialState: { isOpen: boolean } = {
  isOpen: false,
};

export const showPanelSlice = createSlice({
  name: 'panel',
  initialState,
  reducers: {
    setPanel(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const showPanelActions = showPanelSlice.actions;
