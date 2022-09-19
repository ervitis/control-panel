import * as React from 'react'
import styled from 'styled-components'

type Props = {
    onClickSubmitSignIn: () => void
    onClickCloseSignInWindow: () => void
}

export const Component = (props: Props) => {
    return (
        <SigninWrapper>
            <Title>Sign In</Title>
            <Content>
                <>
                    <FormLabel>Username:
                        <InputText type="text" placeholder="email or username"/>
                    </FormLabel>
                    <FormLabel>Password:
                        <InputText type="password" placeholder="password"/>
                    </FormLabel>
                    <FormLabel>Email:
                        <InputText type="email" placeholder="email address"/>
                    </FormLabel>
                </>
                <ButtonsAlignWrap>
                    <button onClick={props.onClickCloseSignInWindow}>Close</button>
                    <button onClick={props.onClickSubmitSignIn}>Submit</button>
                </ButtonsAlignWrap>
            </Content>
        </SigninWrapper>
    )
}

Component.displayName = 'SignInForm'

const SigninWrapper = styled.div`
  position: relative;
  float: right;
  right: 10px;
  top: 0;
  z-index: 100;
  border: 1px solid grey;
  box-shadow: darkgray;
  border-radius: 10px;
  width: 250px;
  background-color: cadetblue;
`

const Title = styled.div`
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`

const Content = styled.div``

const ButtonsAlignWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  padding: 4px;
`

const FormLabel = styled.label`
  padding: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
`

const InputText = styled.input`
  box-sizing: border-box;
  color: blue;
  background-color: papayawhip;
  border-radius: 2px;
  border: none;
  width: 120px;
`
