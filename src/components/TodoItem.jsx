import styles from './TodoItem.module.css'
import closeIcon from '../assets/icon-cross.svg'

export default function TodoItem(props) {
  const { id, text, isCompleted } = props.todo

  function removeItem(event) {
    event.stopPropagation()
    props.removeItem(id)
  }

  function toggleComplete() {
    props.toggleComplete(id)
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
