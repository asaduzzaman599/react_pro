import axios from "axios";

export const fetchTodos = async () => {
  const res = await axios('https://jsonplaceholder.typicode.com/todos');
  return res.data;
};

export const fetchUsers = async () => {
  const res = await axios('https://jsonplaceholder.typicode.com/users');
  return res.data;
};

export const fetchUser = async (id: number) => {
  const res = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.data;
};