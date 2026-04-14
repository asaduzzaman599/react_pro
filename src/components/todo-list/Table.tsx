import { usePaginatedTodos, useUsers } from "../../hooks/todos"
import type { Todo } from "../../types/todo"
import Card from "../Card"
import Pagination from "./table/Pagination"


export default function Table() {
    const { data: todos } = usePaginatedTodos()
    const { data: users } = useUsers()

    const tableContent = !todos || todos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-sm text-gray-500">No todos found.</p>
        </div>
      ) : (<><div className="flow-root overflow-x-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <table className="relative min-w-full divide-y rounded divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    User
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {todos?.map((todo: Todo) => (
                  <tr key={todo.id}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                       
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{todo.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span className={`inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium ${todo.completed ? 'text-green-700 ring-1 ring-inset ring-green-600/20' : 'text-yellow-700 ring-1 ring-inset ring-yellow-600/20'}`}>
                        {todo.completed ? 'Completed' : 'Pending'}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">

                      <div className="mt-1 text-gray-500">{users?.find((user: { id: number; name: string }) => user.id === todo.userId)?.name}</div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            </div>
            <Pagination /></>)
  return (
    <div className="my-8">
    <Card>
        {tableContent}
            </Card>
            
    </div>
  )
}
