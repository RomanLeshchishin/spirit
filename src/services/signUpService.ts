import {ISignUp} from "../models/ISignUp.ts";
import {authApi} from "../api/authApi.ts";

export default class SignUpService{
    static async createSignUp(signUp: ISignUp){
        return authApi.post('/user/signup', {
            user_id: signUp.userId,
            name: signUp.name,
            surname: signUp.surname,
            number: signUp.number,
            email: signUp.email,
            number_people: signUp.numberPeople,
            service: signUp.service,
            date: signUp.date,
            time: signUp.time,
            additional_information: signUp.additionalInformation
        })
    }

    static async getSignUps(userId: string) {
        return authApi.get(`/user/signup/${userId}`)
    }
}
