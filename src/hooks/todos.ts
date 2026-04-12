import { useQuery } from "@tanstack/react-query";
import { fetchTodos, fetchUser, fetchUsers } from "../api/todos";
import { useStoreState } from "../store/store-state";
import type { Todo } from "../types/todo";

export const useTodos = () => {
    const state = useStoreState()
    
    const { data, ...res}= useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos,
    })
    if(!data) return {...res, data}

    let list = data
    
    
    if(state.todo.search) {
        list = data?.filter((todo: Todo) => todo.title.toLowerCase().includes(state.todo.search?.toLowerCase() ?? ''))
    }
    
    if(state.todo.userId) {
        list = list?.filter((todo: Todo) => todo.userId === state.todo.userId)
    }

    if(state.todo.completed !== undefined) {
        list = list?.filter((todo: Todo) => todo.completed === state.todo.completed)
    }

  return  {...res, data: list};
}

export const usePaginatedTodos = () => {
    const {data, ...res} = useTodos()
    const limit = 10
    
    const state = useStoreState()
    const start = (state.todo.page - 1) * limit
    const list = data?.slice(start, start + limit) ?? []
    return {...res, data: list }
}

export const useUsers = () => {

  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
}

export const useUserDetails = (id: number) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUser(id),
    enabled: !!id,
  });
};