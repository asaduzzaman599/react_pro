import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { FormConfig, FormField } from '../../types/form'


const initialState: FormConfig = {
  fields: [],
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addField: (state, action: PayloadAction<FormField[]>) => {
      state.fields.push(...action.payload)
    },
     removeField: (state, action: PayloadAction<number>) => {
      state.fields.splice(action.payload, 1)
    },
    resetFields: (state) => {      state.fields = []  }
  }
})

export const { addField, removeField, resetFields } = formSlice.actions

export default formSlice.reducer