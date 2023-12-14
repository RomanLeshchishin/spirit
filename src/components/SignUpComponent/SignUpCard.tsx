import React, {useEffect} from 'react';
import useStore from "../../store";
import styles from "./styles/SignUpCard.module.scss";

const SignUpCard = () => {
    const store = useStore()
    useEffect(() => {
        // try {
        //
        // }catch (error: any){
        //     store.setRequestLoading(false)
        //     if (error.response.data){
        //         console.log(error.response.data.message)
        //     }
        // }
    }, [])
    return (
        <div className={styles.signUpContent}>
            {store.signUps.map(signUp =>
                <div className={styles.signUpCard}>
                    <div>{signUp.numberPeople}</div>
                    <div>{signUp.service}</div>
                    <div>{signUp.date}</div>
                    <div>{signUp.time}</div>
                    <div>{signUp.additionalInformation}</div>
            </div>
            )}
        </div>
    );
};

export default SignUpCard;
