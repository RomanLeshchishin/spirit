import styles from "./styles/Authorizathion.module.scss";
import {useNavigate} from "react-router";
import {useState} from "react";
import {IUserRegistration} from "../../models/IUser.ts";
import useStore from "../../store";
import AuthService from "../../services/authService.ts";

const Registration = () => {
    const store = useStore();
    const navigate = useNavigate()
    const [user, setUser] = useState<IUserRegistration>({
        name: '',
        surname: '',
        number: '',
        email: '',
        password: ''
    })

    const registration = async (user: IUserRegistration) => {
        try {
            store.setRequestLoading(true)
            const responseRegistration = await AuthService.registrationUser(user)
            console.log(responseRegistration.data)
            const responseLogin = await AuthService.loginUser({email: user.email, password: user.password})
            store.setAuthUser(responseLogin.data.user, responseLogin.data.token)
            store.setRequestLoading(false)
            navigate('/')
        }
        catch (error: any){
            store.setRequestLoading(false)
            if (error.response){
                if(error.response.data.errors){
                    console.log(error.response.data.errors)
                }
                console.log(error.response.data.message)
            }
        }
    }

    return (
        <div className={styles.blockRegistration}>
            <div className={styles.textForgot}>Зарегистрируйте свой аккаунт</div>
            <div className={styles.inputContent}>
                <div className={styles.inputLabel}>Имя</div>
                <input
                    className={styles.inputBlock}
                    placeholder={"Введите своё имя"}
                    type={"text"}
                    value={user.name}
                    onChange={(e) => setUser({...user, name: e.target.value})}
                />
            </div>
            <div className={styles.inputContent}>
                <div className={styles.inputLabel}>Фамилия</div>
                <input
                    className={styles.inputBlock}
                    placeholder={"Введите свою фамилию"}
                    type={"text"}
                    value={user.surname}
                    onChange={(e) => setUser({...user, surname: e.target.value})}
                />
            </div>
            <div className={styles.inputContent}>
                <div className={styles.inputLabel}>Телефон</div>
                <input
                    className={styles.inputBlock}
                    placeholder={"Введите свой номер телефона"}
                    type={"number"}
                    value={user.number}
                    onChange={(e) => setUser({...user, number: e.target.value})}
                />
            </div>
            <div className={styles.inputContent}>
                <div className={styles.inputLabel}>Email</div>
                <input
                    className={styles.inputBlock}
                    placeholder={"Введите свою почту"}
                    type={"email"}
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                />
            </div>
            <div className={styles.inputContent}>
                <div className={styles.inputLabel}>Пароль</div>
                <input
                    className={styles.inputBlock}
                    placeholder={"Введите свой пароль"}
                    type={"password"}
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                />
            </div>
            <button className={styles.loginButton} onClick={() => registration(user)}>Зарегистрироваться</button>
            <div className={styles.blockLabelBottom}>
                <div className={styles.textBottomLabelLeft}>У вас есть аккаунт ?</div>
                <a className={styles.textForgot} onClick={(e) => {navigate("/login"); e.preventDefault()}} href={''}>Войти</a>
            </div>
        </div>
    );
};

export default Registration;
