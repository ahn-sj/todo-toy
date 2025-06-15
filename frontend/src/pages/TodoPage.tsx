import { TodoForm, TodoList } from '../domains/todos/components';

export default function TodoPage() {
  return (
    <>
      <h1>Todo App</h1>
      <TodoForm />

      <h2>Todo List</h2>
      <TodoList />
    </>
  );
}