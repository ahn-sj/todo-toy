package tally.todo.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import tally.todo.dto.TodoRequest
import tally.todo.dto.TodoResponse
import tally.todo.entity.Todo
import tally.todo.repository.TodoRepository

@RestController
class TodoController(
    private val todoRepository: TodoRepository
) {
    @GetMapping("/todos")
    fun getTodos(): List<TodoResponse> {
        return todoRepository.findAll()
            .map { todo -> TodoResponse(todo.id, todo.title) }
    }

    @PostMapping("/todos")
    fun addTodos(
        @RequestBody todoRequest: TodoRequest
    ) {
        val todo = Todo(todoRequest.title)
        todoRepository.save(todo)
    }
}