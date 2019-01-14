import React from 'react'
import styled from 'styled-components'
import Button from '../elements/Button'
import { green, lightGray } from '../colors'

const TodoItem = ({
  className,
  todo,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo
}) => (
  <li
    className={`${className}${todo.complete ? ' complete' : ''}`}
    key={todo.id}>
    <i
      className={`todo-item__check fa${
        todo.complete ? 's' : 'r'
      } fa-check-circle`}
    />
    <span
      className="todo-item__text"
      title="double click to mark this task as completed"
      onDoubleClick={() => onToggleTodo(todo)}>
      {todo.text}
    </span>
    <Button className="todo-item__edit" onClick={() => onEditTodo(todo)}>
      <i className="fas fa-edit" />
    </Button>
    <Button
      className="todo-item__delete"
      type="danger"
      onClick={() => onDeleteTodo(todo)}>
      <i className="fas fa-trash-alt" />
    </Button>
  </li>
)

export default styled(TodoItem)`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  padding: 1rem 0;
  user-select: none;
  border-bottom: 1px solid ${lightGray};

  .todo-item__edit {
    margin-right: 0.6rem;
  }

  .todo-item__check {
    color: ${lightGray};
    font-size: 2rem;
    /* transition: 0.5s color; */
  }

  .todo-item__text {
    flex: 1;
    padding-left: 1rem;
  }

  &.complete {
    .todo-item__text {
      color: gray;
      text-decoration: line-through;
    }

    .todo-item__check {
      color: ${green};
    }
  }
`
