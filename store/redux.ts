import { configureStore } from '@reduxjs/toolkit';
import showModalSlice from './slices/modal-slice';

const store = configureStore({
  reducer: { modal: showModalSlice.reducer },
});

export default store;
