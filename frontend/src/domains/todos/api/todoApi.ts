import type { CreateTodoRequest } from '../types';

// localhost:8080으로 API 호출하는 함수들
const BASE_URL = 'http://localhost:8080';

export const todoApi = {
  // GET /todos - 할 일 목록 조회
  getTodos: async () => {
    const response = await fetch(`${BASE_URL}/todos`);
    return response.json();
  },

  // POST /todos - 할 일 추가
  createTodo: async (todo: CreateTodoRequest) => {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    });
    
    // 성공 응답인지만 확인하고, JSON 파싱하지 않음
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    // 빈 응답이므로 아무것도 반환하지 않음
    return;
  },
};
