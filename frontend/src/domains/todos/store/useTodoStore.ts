import { create } from 'zustand';
import type { Todo, CreateTodoRequest } from '../types';
import { todoApi } from '../api/todoApi'

// 상태(State) 정의 - 데이터만 포함
interface TodoState {
  todos: Todo[];
}

// 액션(Actions) 정의 - 상태를 변경하는 함수들만 포함
interface TodoActions {
  fetchTodos: () => Promise<void>;
  addTodo: (request: CreateTodoRequest) => Promise<void>;
  deleteTodo: (id: string) => void;
}

// 전체 스토어 타입
type TodoStore = TodoState & TodoActions;

export const useTodoStore = create<TodoStore>((set, get) => ({
  // 초기 상태 정의
  todos: [],

  // 할 일 목록 조회 (새로 추가)
  fetchTodos: async () => {
    try {
      const todos = await todoApi.getTodos();
      set({ todos })
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  },

  // 가장 기본적인 액션부터 구현
  addTodo: async (request: CreateTodoRequest) => {
    try {
      await todoApi.createTodo(request);
      const todos = await todoApi.getTodos();
    set({ todos });
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  },

  deleteTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id) // 해당 ID 제외하고 필터링
    }));
  },
}));