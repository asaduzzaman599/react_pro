import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setUserId } from '../../store/todo/todoSlice';
import { useUsers } from '../../hooks/todos';
import { useTodoFilterUrlSync } from '../../hooks/useTodoUrlSync';
import type { User } from '../../types/todo';

const UserSelect: React.FC = () => {
  const { data: users } = useUsers();
  const dispatch = useDispatch();
  const { filters, updateFilterParams } = useTodoFilterUrlSync();

  const handleChange = useCallback(
    (value: number | undefined) => {
      dispatch(setUserId(value));
      updateFilterParams({ userId: value ? String(value) : undefined });
    },
    [dispatch, updateFilterParams]
  );

  const userOptions = users?.map((user: User) => ({
    title: user.name,
    value: user.id,
  })) ?? [];

  return (
    <div>
      <label className="block text-sm/6 font-medium text-gray-900">Filter by User</label>
      <select
        value={filters.userId || ''}
        onChange={(e) => handleChange(e.target.value ? Number(e.target.value) : undefined)}
        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
      >
        <option value="">All Users</option>
        {userOptions.map((opt: { title: string; value: number }) => (
          <option key={opt.value} value={opt.value}>
            {opt.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelect;