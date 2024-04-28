import { useContext, useEffect, useState } from 'react'

import styles from './TodoList.module.css'
import TodoItem from './TodoItem'
import Filters from './Filters'
import { ACTIONS, TodoContext } from '../App'

export default function TodoList() {
  const { todos, filteredTodos, dispatch } = useContext(TodoContext)
  const [isMobile, setIsMobile] = useState(window.outerWidth <= 600)

  function handleResize() {
    setIsMobile(window.outerWidth <= 600)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const todoItems = filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
  const itemsLeft = todos.filter(todo => !todo.isCompleted).length

  return (
    <>
      <div className={styles.todoList}>
        <ol className={styles.todos}>{todoItems}</ol>
        <div className={styles.listBottom}>
          <span>
            {itemsLeft} {itemsLeft === 1 ? 'item' : 'items'} left
          </span>
          {!isMobile && <Filters />}
          <button className="btn" onClick={() => dispatch({ type: ACTIONS.CLEAR_COMPLETED })}>
            Clear completed
          </button>
        </div>
      </div>
      {isMobile && (
        <div className={styles.mobileFilters}>
          <Filters />
        </div>
      )}
    </>
  )
}
