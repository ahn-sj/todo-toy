import { useEffect } from 'react';
import { TodoForm, TodoList } from '../domains/todos/components';
import { useTodoStore } from '../domains/todos/store/useTodoStore';

export default function TodoPage() {
  const { fetchTodos } = useTodoStore();

  // 페이지 로드 시 백엔드에서 할 일 목록을 가져옴
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <>
      <h1>Todo App</h1>
      <TodoForm />

      <h2>Todo List</h2>
      <TodoList />
    </>
  );
}