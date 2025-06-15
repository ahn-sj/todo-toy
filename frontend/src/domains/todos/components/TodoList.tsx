import { useTodoStore } from "../store/useTodoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useTodoStore();

  if (todos.length === 0) {
    return <p>할 일이 없습니다.</p>;
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
