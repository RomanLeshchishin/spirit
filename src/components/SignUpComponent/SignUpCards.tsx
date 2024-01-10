import useStore from "../../store";
import styles from "./styles/SignUpCard.module.scss";
import SignUpCard from "./SignUpCard.tsx";

const SignUpCards = () => {
    const store = useStore()
    return (
        <div className={styles.signUpContent}>
            {store.signUps.map((signUp, count) =>
                <>
                    <SignUpCard
                        signUp={{
                            _id: signUp._id,
                            userId: signUp.userId,
                            name: signUp.name,
                            surname: signUp.surname,
                            number: signUp.number,
                            email: signUp.email,
                            number_people: signUp.number_people,
                            service: signUp.service,
                            date: signUp.date,
                            time: signUp.time,
                            additional_information: signUp.additional_information
                        }}
                        key={count}
                    />
                </>
            )}
        </div>
    );
};

export default SignUpCards;
