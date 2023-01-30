import { configureStore } from '@reduxjs/toolkit';
import { userSlice, showModalSlice, showPanelSlice } from './slices';

const store = configureStore({
  reducer: {
    modal: showModalSlice.reducer,
    user: userSlice.reducer,
    panel: showPanelSlice.reducer,
  },
});

export default store;
