import { SignIn } from '@/api/v1/login'
import { User } from '@/domain'

export const toSignInUserDto = (signIn: SignIn): User => {
    return {
        email: signIn.email,
        password: signIn.password,
        username: signIn.username
    }
}