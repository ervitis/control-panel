import * as React from 'react'

type Result = {
    isSiginWindowOpen: boolean

    onClickSignIn: () => void
    onClickSubmitSignIn: () => void
    onClickCloseSiginWindow: () => void
}

export const useSignIn = (): Result => {
    const [isOpen, setOpen] = React.useState<boolean>(false)

    const onClickSignIn = React.useCallback(() => {
        setOpen(true)
    }, [])

    const onClickSubmitSignIn = React.useCallback(() => {
        return
    }, [])

    const onClickCloseSiginWindow = React.useCallback(() => {
        setOpen(false)
    }, [])

    return {
        isSiginWindowOpen: isOpen,

        onClickSignIn,
        onClickSubmitSignIn,
        onClickCloseSiginWindow
    }
}