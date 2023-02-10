import { createSlice } from '@reduxjs/toolkit';
import { User } from 'types';

const initialState: User = {
  user: {
    id: '',
    google_id: '',
    name: '',
    image: '',
    email_verified_at: '',
    emails: [],
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
    },
  },
});

export const userActions = userSlice.actions;
