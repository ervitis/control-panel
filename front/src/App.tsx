import React from 'react'
import { Link, HashRouter as Router, Routes, Route } from 'react-router-dom'

import * as About from '@pages/About'

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
                    <Route path="/about" element={<About.Component />}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App
