import { configureStore } from '@reduxjs/toolkit';
import {
  userSlice,
  showModalSlice,
  showPanelSlice,
  showEmailSlice,
} from './slices';

const store = configureStore({
  reducer: {
    modal: showModalSlice.reducer,
    user: userSlice.reducer,
    panel: showPanelSlice.reducer,
    email: showEmailSlice.reducer,
  },
});

export default store;
