import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import * as About from '@/pages/About'
import * as Home from '@/pages/Home'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home.Component />}/>
                <Route path="/about" element={<About.Component />}/>
            </Routes>
        </Router>
    )
}

export default App
