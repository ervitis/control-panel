import * as React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about">
            <About.Component />
          </Route>
          <Route path="/login">
            <Login.Component />
          </Route>
          <Route path="/">
            <Home.Component />
          </Route>
        </Routes>

      </div>
    </Router>
  )
}

export default App
