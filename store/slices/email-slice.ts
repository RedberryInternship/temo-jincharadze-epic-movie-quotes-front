import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  modal: {
    showAddEmailSuccess: boolean;
    primaryChanged: boolean;
    isEmailVerified: boolean;
  };
} = {
  modal: {
    showAddEmailSuccess: false,
    primaryChanged: false,
    isEmailVerified: false,
  },
};

export const showEmailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setShowAddEmailSuccess(state, action) {
      state.modal.showAddEmailSuccess = action.payload;
    },
    setPrimaryChanged(state, action) {
      state.modal.primaryChanged = action.payload;
    },
    setIsEmailVerified(state, action) {
      state.modal.isEmailVerified = action.payload;
    },
  },
});

export const showEmailActions = showEmailSlice.actions;
