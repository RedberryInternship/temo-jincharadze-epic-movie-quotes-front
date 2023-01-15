import { createSlice } from '@reduxjs/toolkit';
import { ModalForm } from 'types';

const initialState: ModalForm = {
  modal: { isOpen: false, value: '' },
};

const showModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalValue(state, action) {
      state.modal.value = action.payload;
    },
    setModalIsOpen(state, action) {
      state.modal.isOpen = action.payload;
    },
  },
});

export const showModalActions = showModalSlice.actions;

export default showModalSlice;
