import React, { useContext } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import TodosContext from '../context'
import { jsonServerURL } from '../constants'
import TodoItem from './TodoItem'

const TodoList = ({ className }) => {
  const { state, dispatch } = useContext(TodosContext)
  const title =
    state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing to do!'

  const deleteTodo = async todo => {
    await axios.delete(`${jsonServerURL}/${todo.id}`)
    dispatch({ type: 'REMOVE_TODO', payload: todo })
  }

  const toggleTodo = async todo => {
    const response = await axios.patch(`${jsonServerURL}/${todo.id}`, {
      complete: !todo.complete
    })
    dispatch({ type: 'TOGGLE_TODO', payload: response.data })
  }

  const editTodo = todo => {
    dispatch({ type: 'SET_CURRENT_TODO', payload: todo })
  }

  return (
    <div className={className}>
      <h1>{title}</h1>
      <ul>
        {state.todos.map(todo => (
          <TodoItem
            todo={todo}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
            onEditTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default styled(TodoList)`
  padding: 1.8rem 3rem 4rem 3rem;

  h1 {
    margin: 0;
    font-size: 2rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
`
