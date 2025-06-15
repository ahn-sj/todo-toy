import { useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';

export default function TodoForm() {
    // 1. 인풋에 대한 상태를 관리해야 함
    const[inputValue, setInputValue] = useState('');
    const { addTodo } = useTodoStore();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    // 4. 추가 버튼을 누르거나 엔터를 눌렀을 때 추가에 대한 액션 정의 및 인풋박스 비우기
    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(inputValue.trim()) {
            addTodo({ title: inputValue.trim() });
            setInputValue('');
        }
    }

    // 2. 인풋박스와 추가 버튼을 만들어야 함
    // 3. 인풋박스에 입력을 하면 입력이 되어야 함
    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" value={inputValue} onChange={handleOnChange} />
            <button type="submit">추가</button>
        </form>
    );
} 
