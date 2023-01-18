import { createSlice } from '@reduxjs/toolkit';
import { User } from 'types';

const initialState: User = {
  user: {
    id: '',
    name: '',
    image: '',
  },
  emails: [
    {
      email: '',
      primary: '',
      id: '',
      user_id: '',
    },
  ],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.emails = action.payload.emails;
    },
  },
});

export const userActions = userSlice.actions;
