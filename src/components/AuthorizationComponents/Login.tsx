import styles from "./styles/Authorizathion.module.scss";
import {useNavigate} from "react-router";
import {useState} from "react";
import {IUserLogin} from "../../models/IUser.ts";
import AuthService from "../../services/authService.ts";
import useStore from "../../store";
import SignUpService from "../../services/signUpService.ts";

const Login = () => {
    const store = useStore();
    const navigate = useNavigate()
    const [user, setUser] = useState<IUserLogin>({
        email: '',
        password: ''
    })
    const login = async (user: IUserLogin) => {
        try {
            store.setRequestLoading(true)
            const response = await AuthService.loginUser(user)
            store.setAuthUser(response.data.user, response.data.token)
            const responseSignUps = await SignUpService.getSignUps(response.data.user.id)
            store.setSignUps(responseSignUps.data)
            store.setRequestLoading(false)
            navigate('/signup')
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
        <div className={styles.blockLogin}>
            <div className={styles.textForgot}>Войдите в свой аккаунт</div>
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
            <button className={styles.loginButton} onClick={() => login(user)}>Войти</button>
            <div className={styles.blockLabelBottom}>
                <div className={styles.textBottomLabelLeft}>Нет аккаунта ?</div>
                <a className={styles.textForgot} onClick={(e) => {navigate("/registration"); e.preventDefault()}} href={''}>Зарегистрироваться</a>
            </div>
        </div>
    );
};

export default Login;
