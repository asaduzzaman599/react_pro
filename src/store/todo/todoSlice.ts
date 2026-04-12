import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface TodoState {
    search?: string
  userId?: number
  completed?: boolean
  page: number
  limit: number
}

const initialState: TodoState = {
  userId: undefined,
  completed: undefined,
  search: undefined,
  page: 1,
  limit: 10,
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<number | undefined>) => {
      state.userId = action.payload
      state.page = 1
    },
    setCompleted: (state, action: PayloadAction<boolean | undefined>) => {
      state.completed = action.payload
      state.page = 1
    },
    setSearch: (state, action: PayloadAction<string | undefined>) => {
      state.search = action.payload
      state.page = 1
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    resetFilters: (state) => {
      state.userId = undefined
      state.completed = undefined
      state.search = undefined
      state.page = 1
    },
  },
})

export const { setUserId, setCompleted, setSearch, setPage, resetFilters } =
  todoSlice.actions

export default todoSlice.reducer