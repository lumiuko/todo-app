import { useContext } from 'react'
import styles from './Filters.module.css'
import { TodoContext } from '../App'

export default function Filters() {
  const { filter, applyFilter } = useContext(TodoContext)

  return (
    <div className={styles.filters}>
      <input type="radio" id="all" name="filter" value="all" checked={filter === 'all'} onChange={applyFilter} />
      <label className="btn" htmlFor="all">
        All
      </label>

      <input type="radio" id="active" name="filter" value="active" checked={filter === 'active'} onChange={applyFilter} />
      <label className="btn" htmlFor="active">
        Active
      </label>

      <input type="radio" id="completed" name="filter" value="completed" checked={filter === 'completed'} onChange={applyFilter} />
      <label className="btn" htmlFor="completed">
        Completed
      </label>
    </div>
  )
}
