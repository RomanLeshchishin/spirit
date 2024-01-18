import create from 'zustand';
import {IUser} from "../models/IUser.ts";
import {ISignUp} from "../models/ISignUp.ts";
import {decodeToken} from "../utils/decodeToken.ts";
import {Role} from "../models/Role.ts";

type Store = {
    authUser: IUser | null,
    role: Role,
    requestLoading: boolean,
    signUps: ISignUp[],
    setAuthUser: (user: IUser | null, token: string) => void,
    setRequestLoading: (isLoading: boolean) => void,
    setSignUps: (signUps: ISignUp[]) => void,
    updateSignUps: (signUp: ISignUp) => void,
    logOut: () => void
}

const useStore = create<Store>((set) => ({
    authUser: null,
    role: Role.NoAuth,
    requestLoading: false,
    signUps: [],
    setAuthUser: (user, token) => {
        set((state) =>  ({...state, authUser: user, role: decodeToken(token)}));
        localStorage.setItem('token', token)
    },
    setRequestLoading: (isLoading) =>
        set((state) => ({ ...state, requestLoading: isLoading })),
    setSignUps: (signUps) => set((state) => ({...state, signUps: signUps})),
    updateSignUps: (signUp) => set((state) => ({signUps: [...state.signUps, signUp]})),
    logOut: () => { set((state) => ({...state, authUser: null, role: Role.NoAuth}));
        localStorage.removeItem('token')
    }
}))

export default useStore;

