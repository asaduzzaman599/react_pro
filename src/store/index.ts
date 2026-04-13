import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todo/todoSlice'
import formReducer from './form/formSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    form: formReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch