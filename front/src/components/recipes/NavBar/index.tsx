import React from 'react'
import { Link } from 'react-router-dom'

export const Component = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <button>Login</button>
            <button>Sign In</button>
        </nav>
    )
}

Component.displayName = 'NavBar'
