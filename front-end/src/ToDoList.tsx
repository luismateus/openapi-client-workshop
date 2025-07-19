import { useEffect, useState } from 'react'
import { api } from './api'
import type { Todo } from './gen/models/Todo'

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    api.getTodos()
      .then(setTodos)
      .catch(console.error)
  }, [])

  const handleAdd = async () => {
    if (!newTitle.trim()) return

    try {
      await api.createTodos({ newTodo: { title: newTitle, completed: false } })
      const updated = await api.getTodos()
      setTodos(updated)
      setNewTitle('')
    } catch (e) {
      console.error('Failed to create todo:', e)
    }
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
