import { useState, useEffect } from 'react'

import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import initialTodos from './initialTodos'

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todoList')) ?? initialTodos)
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

  function addItem(text) {
    const id = crypto.randomUUID()
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
      <Header />
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
