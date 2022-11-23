import { useDashboard } from '@/pages/Home/useDashboard'
import * as Domain from '@/domain'
import React from 'react'
import * as NavBar from '@/components/recipes/NavBar'

type Props = {
    filters: Domain.UserFilter
    setFilter: (filter: Domain.UserFilter) => void
}

export const Component = (props: Props) => {
    const { isError, dashboardState, isLoading } = useDashboard({
        filters: props.filters,
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Something went wrong</p>
    }

    return (
        <>
            <NavBar.Component />
            Home Page
            {dashboardState.users.map((user) => (
                <p key={user.id}>
                    {user.name} - {user.birthday}
                </p>
            ))}
        </>
    )
}

Component.displayName = 'Home'
