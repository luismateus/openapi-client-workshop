// src/ToDoList.tsx
import { useEffect, useState } from 'react'
import { getTodos, createTodo } from './api'
import type { Todo } from './models/Todo'

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    getTodos().then(setTodos)
  }, [])

  const handleAdd = async () => {
    if (!newTitle.trim()) return
    const newTodo = await createTodo({ title: newTitle, completed: false })
    setTodos(prev => [...prev, newTodo])
    setNewTitle('')
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Todos</h1>
      <ul className="mb-4">
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly /> {todo.title}
          </li>
        ))}
      </ul>
      <input
        className="border p-2 mr-2"
        value={newTitle}
        onChange={e => setNewTitle(e.target.value)}
        placeholder="New todo"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAdd}>
        Add
      </button>
    </div>
  )
}
