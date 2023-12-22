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
            number_people: signUp.number_people,
            service: signUp.service,
            date: signUp.date,
            time: signUp.time,
            additional_information: signUp.additional_information
        })
    }

    static async getSignUps(userId: string) {
        return authApi.get(`/user/signup/${userId}`)
    }

    static async updateSignUp(updatedSignUp: ISignUp){
        return authApi.put('/user/signup', {
            _id: updatedSignUp._id,
            user_id: updatedSignUp.userId,
            name: updatedSignUp.name,
            surname: updatedSignUp.surname,
            number: updatedSignUp.number,
            email: updatedSignUp.email,
            number_people: updatedSignUp.number_people,
            service: updatedSignUp.service,
            date: updatedSignUp.date,
            time: updatedSignUp.time,
            additional_information: updatedSignUp.additional_information
        })
    }

    static async deleteSignUp(signUpId: string){
        return authApi.delete(`/user/signup/${signUpId}`)
    }
}
