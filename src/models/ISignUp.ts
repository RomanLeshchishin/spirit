import {IUserProfile} from "./IUser.ts";

export interface ISignUp extends IUserProfile{
    _id: string,
    number_people: number,
    service: string,
    date: string,
    time: string,
    additional_information: string
}
