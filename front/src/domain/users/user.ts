export type User = {
    username: string
    email: string
    password: string
}

export type SignedUser = {
    username: string
    id: string
}

export type FilteredUser = {
    id: number
    name: string
    birthday: string
}
