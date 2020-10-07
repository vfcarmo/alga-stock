import { Thunk } from "..";
import { signInUser } from "../../services/Authentication.services";

declare interface Credentials {
    user: string,
    password: string
}

export const login = ({ user, password }: Credentials): Thunk => async (dispatch) => {
    const loggedInUser = await signInUser(user, password)
    dispatch({
        type: 'AUTHENTICATION_LOGIN',
        payload: loggedInUser
    })
}  