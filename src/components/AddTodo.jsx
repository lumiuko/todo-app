import { useContext, useState } from 'react'
import { ACTIONS, TodoContext } from '../App'
import styles from './AddTodo.module.css'

export default function AddTodo() {
  const { dispatch } = useContext(TodoContext)
  const [text, setText] = useState('')

  function handleChange(event) {
    setText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, text })
    setText('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={`btn-rounded ${styles.btnAdd}`} aria-label="Add item"></button>
      <input onChange={handleChange} value={text} placeholder="Create a new todo..." required />
    </form>
  )
}
