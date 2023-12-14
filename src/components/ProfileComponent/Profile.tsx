import React from 'react';
import useStore from "../../store";
import styles from "./Profile.module.scss";
import SignUpCard from "../SignUpComponent/SignUpCard.tsx";

const Profile = () => {
    const store = useStore()
    return (
        <div className={styles.profileContent}>
            <div className={styles.profileCard}>
                <div>{store.authUser?.name}</div>
                <div>{store.authUser?.surname}</div>
                <div>{store.authUser?.number}</div>
                <div>{store.authUser?.email}</div>
            </div>
            <SignUpCard/>
        </div>
    );
};

export default Profile;
