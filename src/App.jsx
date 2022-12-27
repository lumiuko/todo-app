import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import initialTodos from './initialTodos'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => localStorage.getItem('theme-color') !== 'light')
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todoList')) ?? initialTodos)
  const [filter, setFilter] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState(todos)

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : ''
    localStorage.setItem('theme-color', isDarkTheme ? 'dark' : 'light')
  }, [isDarkTheme])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    if (filter === 'all') {
      setFilteredTodos(todos)
      return
    }
    const isFilterSetCompleted = filter === 'completed'
    setFilteredTodos(todos.filter(todo => todo.isCompleted === isFilterSetCompleted))
  }, [filter, todos])

  function switchTheme() {
    setIsDarkTheme(prevTheme => !prevTheme)
  }

  function addItem(text) {
    const id = uuid()
    setTodos(prevTodos => [...prevTodos, { id, text, isCompleted: false }])
  }

  function removeItem(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  function toggleComplete(id) {
    setTodos(prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)))
  }

  function clearCompleted() {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.isCompleted))
  }

  function applyFilter(event) {
    setFilter(event.target.value)
  }

  return (
    <main className="container">
      <Header isDarkTheme={isDarkTheme} switchTheme={switchTheme} />
      <AddTodo addItem={addItem} />
      {todos.length > 0 && (
        <TodoList
          allTodos={todos}
          todos={filteredTodos}
          removeItem={removeItem}
          toggleComplete={toggleComplete}
          clearCompleted={clearCompleted}
          applyFilter={applyFilter}
          filter={filter}
        />
      )}
    </main>
  )
}

export default App
