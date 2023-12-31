import create from 'zustand';
import {IUser} from "../models/IUser.ts";
import {ISignUp} from "../models/ISignUp.ts";

type Store = {
    authUser: IUser | null,
    requestLoading: boolean,
    signUps: ISignUp[],
    setAuthUser: (user: IUser | null) => void,
    setRequestLoading: (isLoading: boolean) => void,
    setSignUp: (signUp: ISignUp) => void
}

const useStore = create<Store>((set) => ({
    authUser: null,
    requestLoading: false,
    signUps: [],
    setAuthUser: (user) => {
        set((state) =>  ({...state, authUser: user}));
        localStorage.setItem('token', user.token)
    },
    setRequestLoading: (isLoading) =>
        set((state) => ({ ...state, requestLoading: isLoading })),
    setSignUp: (signUp) => set((state) => ({signUps: [...state.signUps, signUp]}))
}))

export default useStore;

