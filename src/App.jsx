import { useState, useEffect, useReducer, createContext } from 'react'

import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import initialTodos from './initialTodos'

const ACTIONS = {
  ADD_TODO: 'add_todo',
  REMOVE_TODO: 'remove_todo',
  TOGGLE_TODO: 'toggle_todo',
  CLEAR_COMPLETED: 'clear_completed'
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.text)]
    case ACTIONS.REMOVE_TODO:
      return todos.filter(todo => todo.id !== action.id)
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => (todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    case ACTIONS.CLEAR_COMPLETED:
      return todos.filter(todo => !todo.isCompleted)
    default:
      return state
  }
}

function newTodo(text) {
  const id = crypto.randomUUID()
  return { id, text, isCompleted: false }
}

const TodoContext = createContext()

function App() {
  const [todos, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todoList')) ?? initialTodos)
  const [filter, setFilter] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState(todos)

  useEffect(() => {
    if (filter === 'all') {
      setFilteredTodos(todos)
      return
    }

    const isFilterSetCompleted = filter === 'completed'
    setFilteredTodos(todos.filter(todo => todo.isCompleted === isFilterSetCompleted))
  }, [filter, todos])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos))
  }, [todos])

  function applyFilter(event) {
    setFilter(event.target.value)
  }

  return (
    <main className="container">
      <TodoContext.Provider value={{ todos, filteredTodos, dispatch, applyFilter, filter }}>
        <Header />
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </main>
  )
}

export default App
export { ACTIONS, TodoContext }
