import { useDispatch } from "react-redux"
import { useStoreState } from "../../../store/store-state"
import { setPage } from "../../../store/todo/todoSlice"
import { useTodos } from "../../../hooks/todos"

export default function Pagination() {
    const state = useStoreState()
    const dispatch = useDispatch()
    const {data} = useTodos()

    const onClick = (page: number) => {
        dispatch(setPage(state.todo.page + page))
    }
  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{(state.todo.page - 1) * state.todo.limit + 1}</span> to <span className="font-medium">{state.todo.page * state.todo.limit}</span> of{' '}
          <span className="font-medium">{data.length ?? 0}</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        {state.todo.page > 1 && (
          <button
            onClick={()=>onClick(-1)}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Previous
          </button>
        )}
        {state.todo.page * state.todo.limit < data.length && (
          <button
            onClick={()=>onClick(1)}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Next
          </button>
        )}
      </div>
    </nav>
  )
}
