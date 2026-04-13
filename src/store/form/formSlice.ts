import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FormConfig, FormField } from "../../types/form";

const initialState: FormConfig = {
  fields: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<FormField[]>) => {
      state.fields = action.payload;
    },

    removeField: (state, action: PayloadAction<number>) => {
      state.fields.splice(action.payload, 1);
    },

    resetFields: (state) => {
      state.fields = [];
    },
  },
});

export const { setForm, removeField, resetFields } = formSlice.actions;

export default formSlice.reducer;