import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser.ts";

const initialState: IUser = {
    name: '',
    surname: '',
    number: '',
    email: '',
    token: '',
    id: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state: IUser, action){
            state.name = action.payload.name
            state.surname = action.payload.surname
            state.number = action.payload.number
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        },
        removeUser(state: IUser){
            state.name = ''
            state.surname = ''
            state.number = ''
            state.email = ''
            state.token = ''
            state.id = ''
        }
    }
})

export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer
