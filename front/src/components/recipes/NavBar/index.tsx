import * as LoginForm from '@/components/snowflakes/Login'
import { useLogin } from '@/components/snowflakes/Login/useLogin'
import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Component = () => {
    const loginForm = useLogin()

    return (
        <>
            <ComponentWrapper>
                <LinksWrapper>
                    <LinkWrapper to="/">Home</LinkWrapper>
                    <LinkWrapper to="/about">About</LinkWrapper>
                </LinksWrapper>
                <ControlAccessButtonsWrapper>
                    <LoginButtonWrapper type="button" onClick={loginForm.onClickLogin}>Login</LoginButtonWrapper>
                    <SignInButtonWrapper type="button" onClick={() => alert('bye')}>Sign In</SignInButtonWrapper>
                </ControlAccessButtonsWrapper>
            </ComponentWrapper>
            {loginForm.isLoginWindowOpen && (
                <LoginForm.Component
                    onClickCloseLoginWindow={loginForm.onClickCloseLoginWindow}
                    onClickSubmitLogin={loginForm.onClickSubmitLogin}
                />)}
        </>

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
