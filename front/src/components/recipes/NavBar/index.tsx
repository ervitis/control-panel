import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Component = () => {
    return (
        <ComponentWrapper>
            <LinksWrapper>
                <LinkWrapper to="/">Home</LinkWrapper>
                <LinkWrapper to="/about">About</LinkWrapper>
            </LinksWrapper>
            <ControlAccessButtonsWrapper>
                <LoginButtonWrapper type="button" onClick={() => {alert('hello')}}>Login</LoginButtonWrapper>
                <SignInButtonWrapper type="button" onClick={() => alert('bye')}>Sign In</SignInButtonWrapper>
            </ControlAccessButtonsWrapper>
        </ComponentWrapper>
    )
}

Component.displayName = 'NavBar'

const ComponentWrapper = styled.nav`
    background-color: orange;
    gap: 10px;
    padding: 4px;
    display: flex;
`

const LinksWrapper = styled.div`
    margin: 0 10px;
`

const LinkWrapper = styled(Link)`
    margin: 0 4px;
`

const ControlAccessButtonsWrapper = styled.div`
    margin-left: auto;
`

const LoginButtonWrapper = styled.button`
    background-color: gainsboro;
`

const SignInButtonWrapper = styled.button`
    background-color: honeydew;
`
