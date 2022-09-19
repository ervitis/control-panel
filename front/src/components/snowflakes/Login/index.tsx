import * as React from 'react'
import styled from 'styled-components'

type Props = {
    onClickSubmitLogin: () => void
    onClickCloseLoginWindow: () => void
}

export const Component = (props: Props) => {
    return (
        <LoginWrapper>
            <Title>Log In</Title>
            <Content>
                Login form
                <ButtonsAlignWrap>
                    <button onClick={props.onClickCloseLoginWindow}>Close</button>
                    <button onClick={props.onClickSubmitLogin}>Submit</button>
                </ButtonsAlignWrap>
            </Content>
        </LoginWrapper>
    )
}

Component.displayName = 'LoginForm'

const LoginWrapper = styled.div`
  position: relative;
  float: right;
  right: 50px;
  top: 0;
  z-index: 100;
  border: 1px solid grey;
  box-shadow: darkgray;
  border-radius: 10px;
  width: 250px;
  background-color: beige;
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
