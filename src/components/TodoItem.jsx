import styles from './TodoItem.module.css'
import closeIcon from '../assets/icon-cross.svg'
import { useContext } from 'react'
import { ACTIONS, TodoContext } from '../App'

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext)
  const { id, text, isCompleted } = todo

  function removeItem(event) {
    event.stopPropagation()
    dispatch({ type: ACTIONS.REMOVE_TODO, id })
  }

  function toggleComplete() {
    dispatch({ type: ACTIONS.TOGGLE_TODO, id })
  }

  return (
    <li className={`${styles.todoItem} ${isCompleted ? styles.completed : ''}`} onClick={toggleComplete}>
      <button className={`btn-rounded ${styles.btnComplete}`} aria-label="Toggle complete"></button>
      <span className={styles.todoText}>{text}</span>
      <button className={`btn ${styles.btnRemove}`} aria-label="Remove item" onClick={removeItem}>
        <img src={closeIcon} alt="Remove item" aria-hidden="true" />
      </button>
    </li>
  )
}
