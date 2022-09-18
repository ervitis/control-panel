import React from 'react'
import { Link } from 'react-router-dom'

export const Component = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="#">Login</Link>
                <Link to="#">Sign In</Link>
            </nav>
        </div>
    )
}

Component.displayName = 'Home'
