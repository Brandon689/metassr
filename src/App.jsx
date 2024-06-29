// src/App.jsx
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import styled from '@emotion/styled'
import SplashScreen from './components/SplashScreen'
import AdminPanel from './components/AdminPanel'
import Todos from './components/Todos'

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
`

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const MainContent = styled.main`
  flex-grow: 1;
  padding: 1rem;
`

function App() {
  return (
    <AppContainer>
      <Header>
        <Nav>
          <ul>
            <li><Link to="/">Splash</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/todos">Todos</Link></li>
          </ul>
        </Nav>
      </Header>
      <MainContent>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </MainContent>
    </AppContainer>
  )
}

export default App
