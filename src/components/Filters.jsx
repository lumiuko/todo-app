import styles from './Filters.module.css'

export default function Filters(props) {
  return (
    <div className={styles.filters}>
      <input
        type="radio"
        id="all"
        name="filter"
        value="all"
        checked={props.filter === 'all'}
        onChange={props.applyFilter}
      />
      <label className="btn" htmlFor="all">
        All
      </label>

      <input
        type="radio"
        id="active"
        name="filter"
        value="active"
        checked={props.filter === 'active'}
        onChange={props.applyFilter}
      />
      <label className="btn" htmlFor="active">
        Active
      </label>

      <input
        type="radio"
        id="completed"
        name="filter"
        value="completed"
        checked={props.filter === 'completed'}
        onChange={props.applyFilter}
      />
      <label className="btn" htmlFor="completed">
        Completed
      </label>
    </div>
  )
}
