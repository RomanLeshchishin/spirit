import {IUserProfile} from "./IUser.ts";

export interface ISignUp extends IUserProfile{
    numberPeople: number,
    service: string,
    date: string,
    time: string,
    additionalInformation: string
}
