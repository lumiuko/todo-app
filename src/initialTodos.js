import { v4 as uuid } from 'uuid'

const initialTodos = [
  {
    id: uuid(),
    text: 'Complete Online JavaScript course',
    isCompleted: true
  },
  {
    id: uuid(),
    text: 'Jog around the park 3x',
    isCompleted: false
  },
  {
    id: uuid(),
    text: '10 minutes meditation',
    isCompleted: false
  },
  {
    id: uuid(),
    text: 'Read for 1 hour',
    isCompleted: false
  },
  {
    id: uuid(),
    text: 'Pick up groceries',
    isCompleted: false
  },
  {
    id: uuid(),
    text: 'Complete Todo App on Frontend Mentor',
    isCompleted: false
  }
]

export default initialTodos
