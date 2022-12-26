import { useEffect, useState } from 'react'

import styles from './TodoList.module.css'
import TodoItem from './TodoItem'
import Filters from './Filters'

export default function TodoList(props) {
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

  const todoItems = props.todos.map(todo => (
    <TodoItem key={todo.id} todo={todo} removeItem={props.removeItem} toggleComplete={props.toggleComplete} />
  ))

  const itemsLeft = props.allTodos.filter(todo => !todo.isCompleted).length
  const filters = <Filters filter={props.filter} applyFilter={props.applyFilter} />

  return (
    <>
      <div className={styles.todoList}>
        <ol className={styles.todos}>{todoItems}</ol>
        <div className={styles.listBottom}>
          <span>
            {itemsLeft} item{itemsLeft !== 1 && 's'} left
          </span>
          {!isMobile && filters}
          <button className="btn" onClick={props.clearCompleted}>
            Clear completed
          </button>
        </div>
      </div>
      {isMobile && <div className={styles.mobileFilters}>{filters}</div>}
    </>
  )
}
