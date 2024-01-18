import {jwtDecode} from "jwt-decode";
import {IToken} from "../models/IToken.ts";
import {Role} from "../models/Role.ts";

export const decodeToken = (token: string) => {
    const dataToken : IToken = jwtDecode(token)
    return dataToken.role as Role
}
