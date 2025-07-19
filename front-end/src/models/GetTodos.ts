import type { Todo } from './Todo.ts'

/**
 * @description OK
 */
export type GetTodos200 = Todo[]

export type GetTodosQueryResponse = GetTodos200

export type GetTodosQuery = {
  Response: GetTodos200
  Errors: any
}