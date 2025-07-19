// src/api/todos.ts
import type { Todo } from './models/Todo'

const BASE_URL = 'http://localhost:4000'

export async function getTodos(): Promise<Todo[]> {
  const res = await fetch(`${BASE_URL}/todos`)
  if (!res.ok) throw new Error('Failed to fetch todos')
  return res.json()
}

export async function createTodo(todo: Omit<Todo, 'id'>): Promise<Todo> {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
  if (!res.ok) throw new Error('Failed to create todo')
  return res.json()
}
