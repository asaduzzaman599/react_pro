import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

interface TodoFilterParams {
  search?: string;
  userId?: string;
  completed?: string;
  page?: string;
}

export const useTodoFilterUrlSync = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getFilterParams = useCallback((): TodoFilterParams => {
    return {
      search: searchParams.get('search') ?? undefined,
      userId: searchParams.get('userId') ?? undefined,
      completed: searchParams.get('completed') ?? undefined,
      page: searchParams.get('page') ?? '1',
    };
  }, [searchParams]);

  const updateFilterParams = useCallback((filterUpdates: Partial<TodoFilterParams>) => {
    const current = Object.fromEntries(searchParams);
    const updated = { ...current, ...filterUpdates };
    
    (Object.keys(updated) as Array<keyof TodoFilterParams>).forEach(key => {
      if (!updated[key]) {
        delete updated[key];
      }
    });

    setSearchParams(updated as Record<string, string>);
  }, [searchParams, setSearchParams]);

  const clearFilters = useCallback(() => {
    setSearchParams({ page: '1' });
  }, [setSearchParams]);

  return {
    filters: getFilterParams(),
    updateFilterParams,
    clearFilters,
  };
};
