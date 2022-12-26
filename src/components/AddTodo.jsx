import { useState } from 'react'
import styles from './AddTodo.module.css'

export default function AddTodo(props) {
  const [todoText, setTodoText] = useState('')

  function handleChange(event) {
    setTodoText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    props.addItem(todoText)
    setTodoText('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.btnAdd} aria-label="Add item"></button>
      <input onChange={handleChange} value={todoText} placeholder="Create a new todo..." required />
    </form>
  )
}
