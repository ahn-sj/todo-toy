package tally.todo.repository

import org.springframework.data.jpa.repository.JpaRepository
import tally.todo.entity.Todo

interface TodoRepository : JpaRepository<Todo, Long>
