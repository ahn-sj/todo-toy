import { create } from 'zustand';
import type { Todo, CreateTodoRequest } from '../types';

// 상태(State) 정의 - 데이터만 포함
interface TodoState {
  todos: Todo[];
}

// 액션(Actions) 정의 - 상태를 변경하는 함수들만 포함
interface TodoActions {
  addTodo: (request: CreateTodoRequest) => void;
  deleteTodo: (id: string) => void;
}

// 전체 스토어 타입
type TodoStore = TodoState & TodoActions;

export const useTodoStore = create<TodoStore>((set, get) => ({
  // 초기 상태 정의
  todos: [],
  filter: 'all',
  isLoading: false,

  // 가장 기본적인 액션부터 구현
  addTodo: (request: CreateTodoRequest) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(), // 브라우저 내장 ID 생성
      title: request.title,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    set((state) => ({
      todos: [...state.todos, newTodo] // 기존 배열 복사 후 새 항목 추가
    }));
  },

  deleteTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id) // 해당 ID 제외하고 필터링
    }));
  },
}));