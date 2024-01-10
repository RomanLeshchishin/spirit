import useStore from "../../store";
import styles from "./Profile.module.scss";
import SignUpCards from "../SignUpComponent/SignUpCards.tsx";

const Profile = () => {
    const store = useStore()
    return (
        <div className={styles.profileContent}>
            <div className={styles.profileCard}>
                <div className={styles.profileField}>
                    <div>Имя:</div>
                    <div>{store.authUser?.name}</div>
                </div>
                <div className={styles.profileField}>
                    <div>Фамилия:</div>
                    <div>{store.authUser?.surname}</div>
                </div>
                <div className={styles.profileField}>
                    <div>Номер телефона:</div>
                    <div>{store.authUser?.number}</div>
                </div>
                <div className={styles.profileField}>
                    <div>Почта:</div>
                    <div>{store.authUser?.email}</div>
                </div>
            </div>
            <SignUpCards/>
        </div>
    );
};

export default Profile;
