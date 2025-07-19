import type { Todo } from './Todo.ts'

export type GetTodoByIdPathParams = {
  /**
   * @type integer
   */
  id: number
}

/**
 * @description OK
 */
export type GetTodoById200 = Todo

export type GetTodoByIdQueryResponse = GetTodoById200

export type GetTodoByIdQuery = {
  Response: GetTodoById200
  PathParams: GetTodoByIdPathParams
  Errors: any
}