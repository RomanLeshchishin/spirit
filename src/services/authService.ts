import {IUserLogin, IUserLoginFromServer, IUserRegistration} from "../models/IUser.ts";
import {authApi} from "../api/authApi.ts";
import {AxiosResponse} from "axios";

export default class AuthService {
    static async registrationUser(user: IUserRegistration):Promise<AxiosResponse<IUserRegistration>>{
        return authApi.post<IUserRegistration>("/auth/registration",
            {
                name: user.name,
                surname: user.surname,
                number: user.number,
                email: user.email,
                password: user.password,
                role: "User"
            }
        )
    }

    static async loginUser(user: IUserLogin):Promise<AxiosResponse<IUserLoginFromServer>>{
        return authApi.post<IUserLoginFromServer>("/auth/login",
            {
                email: user.email,
                password: user.password
            }
        )
    }
}
