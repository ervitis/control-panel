import React from 'react'
import {Link, HashRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="#">Login</Link>
                    <Link to="#">Sign In</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="/about" element={}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App
