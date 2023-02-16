import { createSlice } from '@reduxjs/toolkit';
import { ModalForm } from 'types';

const initialState: ModalForm = {
  modal: { isOpen: false, value: '', isLoading: false },
};

export const showModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalValue(state, action) {
      state.modal.value = action.payload;
    },
    setModalIsOpen(state, action) {
      state.modal.isOpen = action.payload;
    },

    setIsLoading(state, action) {
      state.modal.isLoading = action.payload;
    },
  },
});

export const showModalActions = showModalSlice.actions;
