import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setCompleted } from '../../store/todo/todoSlice';
import { useTodoFilterUrlSync } from '../../hooks/useTodoUrlSync';

export const StatusSelect: React.FC = () => {
  const dispatch = useDispatch();
  const { filters, updateFilterParams } = useTodoFilterUrlSync();

  const statusValue = filters.completed ? (filters.completed === 'true' ? '1' : '0') : '';

  const handleChange = useCallback(
    (value: string) => {
      const isCompleted = value === '1';
      dispatch(setCompleted(value ? isCompleted : undefined));
      updateFilterParams({ completed: value ? (isCompleted ? 'true' : 'false') : undefined });
    },
    [dispatch, updateFilterParams]
  );

  return (
    <div>
      <label className="block text-sm/6 font-medium text-gray-900">Status</label>
      <select
        value={statusValue}
        onChange={(e) => handleChange(e.target.value)}
        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
      >
        <option value="">All Status</option>
        <option value="0">Pending</option>
        <option value="1">Completed</option>
      </select>
    </div>
  );
};
