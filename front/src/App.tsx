import * as NavBar from '@/components/recipes/NavBar'

import * as About from '@/pages/About'
import * as Home from '@/pages/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <>
            <NavBar.Component />
            <div>
                <Routes>
                    <Route path="/" element={<Home.Component />}/>
                    <Route path="/about" element={<About.Component />}/>
                </Routes>
            </div>
        </>

    )
}

export default App
