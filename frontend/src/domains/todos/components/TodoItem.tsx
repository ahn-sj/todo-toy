import type { Todo } from "../types";
import { useTodoStore } from "../store/useTodoStore";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
    const { deleteTodo } = useTodoStore();

    const handleOnDelete = () => {
      deleteTodo(todo.id);
    }

    return (
    <li>
      {todo.title}
      <button onClick={handleOnDelete}>삭제</button>
    </li>
  );
}
