import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>

function App() {
  return (
    <div>
      turtwig
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
