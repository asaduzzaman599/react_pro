import React, { useCallback } from 'react';
import Card from '../Card';
import UserSelect from './UserSelect';
import SearchInput from './SearchInput';
import { StatusSelect } from './StatusSelect';
import { resetFilters } from '../../store/todo/todoSlice';
import { useDispatch } from 'react-redux';
import { useTodoFilterUrlSync } from '../../hooks/useTodoUrlSync';

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const { filters, clearFilters } = useTodoFilterUrlSync();

  const hasActiveFilters = filters.search || filters.userId || filters.completed;

  const handleClearFilters = useCallback(() => {
    dispatch(resetFilters());
    clearFilters();
  }, [dispatch, clearFilters]);

  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 items-end">
        <div className="md:col-span-3">
          <SearchInput />
        </div>
        <UserSelect />
        <StatusSelect />
        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="col-span-1 md:col-span-1 outline outline-gray-300 hover:bg-gray-600 hover:text-white text-gray-600 px-3 py-2 rounded cursor-pointer transition"
          >
            Clear Filters
          </button>
        )}
      </div>
    </Card>
  );
};

export default Filters;