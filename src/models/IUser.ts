export interface IUser{
    id: string,
    name: string,
    surname: string,
    number: string,
    email: string,
    role: string
}

export interface IUserRegistration{
    name: string,
    surname: string,
    number: string,
    email: string,
    password: string
}

export interface IUserLogin{
    email: string,
    password: string
}

export interface IUserProfile{
    userId: string
    name: string,
    surname: string,
    number: string,
    email: string
}

export interface IUserLoginFromServer{
	user: IUser,
	token: string
}
