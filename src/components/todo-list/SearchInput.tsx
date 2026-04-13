import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/todo/todoSlice';
import { useTodoFilterUrlSync } from '../../hooks/useTodoUrlSync';

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const { filters, updateFilterParams } = useTodoFilterUrlSync();
  const [searchValue, setSearchValue] = useState(filters.search || '');

  useEffect(() => {
    setSearchValue(filters.search || '');
  }, [filters.search]);

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setSearch(searchValue || undefined));
      updateFilterParams({ search: searchValue || undefined });
    }, 300);

    return () => clearTimeout(handler);
  }, [searchValue, dispatch, updateFilterParams]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search todos..."
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
    </div>
  );
};

export default SearchInput;