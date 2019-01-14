import React, { useContext, useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { jsonServerURL } from '../constants'
import TodosContext from '../context'
import todosReducer from '../reducer'
import GlobalStyle from './GlobalStyle'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const useAPI = endpoint => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(endpoint)
    setData(response.data)
  }

  return data
}

const App = ({ className }) => {
  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer(todosReducer, initialState)
  const savedTodos = useAPI(jsonServerURL)

  useEffect(
    () => {
      dispatch({
        type: 'GET_TODOS',
        payload: savedTodos
      })
    },
    [savedTodos]
  )

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <main className={className}>
        <GlobalStyle />
        <TodoForm />
        <TodoList />
      </main>
    </TodosContext.Provider>
  )
}

export default styled(App)`
  background: white;
  margin: 0 auto;
  margin-top: 4rem;
  width: 70rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.17);
`
