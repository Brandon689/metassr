// src/components/Todos.jsx
import React from 'react'
import { useQuery } from '@tanstack/react-query'

async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  return res.json()
}

function Todos() {
  const { data, status } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  })

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'error') return <p>Error :(</p>

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {data.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
