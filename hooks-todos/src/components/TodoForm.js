import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import uuidv4 from 'uuid/v4'
import TodosContext from '../context'
import { jsonServerURL } from '../constants'
import Button from '../elements/Button'
import Input from '../elements/Input'

const TodoForm = ({ className }) => {
  const [todo, setTodo] = useState('')
  const {
    state: { currentTodo = {} },
    dispatch
  } = useContext(TodosContext)

  useEffect(
    () => {
      if (currentTodo.text) {
        setTodo(currentTodo.text)
      } else {
        setTodo('')
      }
    },
    [currentTodo.id]
  )

  const handleSubmit = async event => {
    event.preventDefault()
    if (currentTodo.text) {
      const response = await axios.patch(`${jsonServerURL}/${currentTodo.id}`, {
        text: todo
      })
      dispatch({ type: 'UPDATE_TODO', payload: response.data })
    } else {
      const response = await axios.post(jsonServerURL, {
        id: uuidv4(),
        text: todo,
        complete: false
      })
      dispatch({ type: 'ADD_TODO', payload: response.data })
    }
    setTodo('')
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <Input
        className="task-input"
        type="text"
        onChange={event => setTodo(event.target.value)}
        value={todo}
      />
      <Button>{currentTodo.text ? 'Update Task' : 'Add Task'}</Button>
    </form>
  )
}

export default styled(TodoForm)`
  padding: 1.8rem 3rem;
  border-bottom: 1px solid #e5e8e9;

  .task-input {
    margin-right: 0.6rem;
  }
`
