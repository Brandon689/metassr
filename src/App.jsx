import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`

const Nav = styled.nav`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 20px;
`

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 20px;
`

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    &:hover {
      color: #007bff;
    }
  }
`

function App() {
  return (
    <Container>
      <Nav>
        <NavList>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/about">About</Link></NavItem>
        </NavList>
      </Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  )
}

export default App
