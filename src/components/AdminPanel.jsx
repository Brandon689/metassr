import React, { useState } from 'react'
import styled from '@emotion/styled'

const AdminContainer = styled.div`
  width: 80%;
  max-width: 800px;
`

const AdminHeader = styled.h2`
  color: #333;
`

const AdminForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`

function AdminPanel() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { username, password })
    // Here you would typically handle authentication
  }

  return (
    <AdminContainer>
      <AdminHeader>Admin Panel</AdminHeader>
      <AdminForm onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </AdminForm>
    </AdminContainer>
  )
}

export default AdminPanel
