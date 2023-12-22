import React, {useState} from 'react';
import useStore from "../../store";
import {ISignUp} from "../../models/ISignUp.ts";
import styles from "./styles/SignUpCard.module.scss";
import {DatePicker, Select, TimePicker} from "antd";
import {dateFormat, optionsSelect} from "../../../constants/const.ts";
import SignUpService from "../../services/signUpService.ts";

export interface SignUpCardProps{
    signUp: ISignUp
}

const SignUpCard = ({signUp} : SignUpCardProps) => {
    const store = useStore()
    const [userUpdatedSignUp, setUserUpdatedSignUp] = useState<ISignUp>(
        {
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
        }
    )
    const [mode, setMode] = useState<string>('display')
    const updateSignUp = async (signUp: ISignUp) => {
        try {
            store.setRequestLoading(true)
            const response = await SignUpService.updateSignUp(signUp)
            if(store.signUps.find(sp => sp._id == signUp._id) != undefined){
                const newSignUps = store.signUps
                newSignUps[newSignUps.indexOf(newSignUps.find(sp => sp._id == signUp._id))] = signUp
                store.setSignUps(newSignUps)
            }
            store.setRequestLoading(false)
            console.log(store.signUps)
            console.log(response.data)
        }
        catch (error: any){
            store.setRequestLoading(false)
            if (error.response.data){
                console.log(error.response.data.message)
            }
        }
    }

    const deleteSignUp = async (signUpId: string) => {
        try {
            store.setRequestLoading(true)
            const response = await SignUpService.deleteSignUp(signUpId)
            store.setSignUps(store.signUps.filter(sp => sp._id != signUpId))
            store.setRequestLoading(false)
            console.log(store.signUps)
            console.log(response.data)
        }
        catch (error: any){
            store.setRequestLoading(false)
            if (error.response.data){
                console.log(error.response.data.message)
            }
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "15px", backgroundColor: "#E0D0C7", padding: "10px", borderRadius: "10px"}}>
            { mode == 'edit' ?
            <div className={styles.signUpCard}>
                <div className={styles.signUpField}>
                    <div>количество человек:</div>
                    <input
                        placeholder={signUp.number_people.toString()}
                        onChange={(e) => setUserUpdatedSignUp(
                            {
                                ...userUpdatedSignUp,
                                number_people: signUp.number_people == Number(e.target.value) ? signUp.number_people : Number(e.target.value)
                            }
                        )}
                    />
                </div>
                <div className={styles.signUpField}>
                    <div>выбранная услуга:</div>
                    <Select
                        defaultValue={signUp.service}
                        className='select'
                        dropdownStyle={{backgroundColor: '#8D6D5A', color: '#fff'}}
                        options={optionsSelect}
                        onChange={(option) => setUserUpdatedSignUp(
                            {
                                ...userUpdatedSignUp,
                                service: signUp.service == option ? signUp.service : option
                            }
                        )}
                    />
                </div>
                <div className={styles.signUpField}>
                    <div>дата:</div>
                    <DatePicker
                        placeholder={signUp.date}
                        format={dateFormat}
                        className={styles.input2}
                        onChange={(date) => setUserUpdatedSignUp(
                            {
                                ...userUpdatedSignUp,
                                date: signUp.date == date.toString() ? signUp.date : date.toString()
                            }
                        )}
                    />
                </div>
                <div className={styles.signUpField}>
                    <div>время:</div>
                    <TimePicker
                        placeholder={signUp.time}
                        className={styles.input2}
                        onChange={(time) => setUserUpdatedSignUp(
                            {
                                ...userUpdatedSignUp,
                                time: signUp.time == time.toString() ? signUp.time : time.toString()
                            }
                        )}
                    />
                </div>
                <div className={styles.signUpField}>
                    <div>доп. информация:</div>
                    <input
                        placeholder={signUp.additional_information}
                        onChange={(e) => setUserUpdatedSignUp(
                            {
                                ...userUpdatedSignUp,
                                additional_information: signUp.additional_information == e.target.value ? signUp.additional_information : e.target.value
                            }
                        )}
                    />
                </div>
            </div>
            :
            <div className={styles.signUpCard}>
                <div className={styles.signUpField}>
                    <div>количество человек:</div>
                    <div>{signUp.number_people}</div>
                </div>
                <div className={styles.signUpField}>
                    <div>выбранная услуга:</div>
                    <div>{signUp.service}</div>
                </div>
                <div className={styles.signUpField}>
                    <div>дата:</div>
                    <div>{signUp.date}</div>
                </div>
                <div className={styles.signUpField}>
                    <div>время:</div>
                    <div>{signUp.time}</div>
                </div>
                <div className={styles.signUpField}>
                    <div>доп. информация:</div>
                    <div>{signUp.additional_information}</div>
                </div>
            </div>
            }
            <div className={styles.buttonComponent} style={{display: "flex", flexDirection: "row", gap: "15px"}}>
                {mode == 'edit' ?
                    <button onClick={() => {
                        setMode('display');
                        console.log(userUpdatedSignUp);
                        updateSignUp(userUpdatedSignUp)
                    }}>сохранить
                    </button>
                    :
                    <button onClick={() => setMode('edit')}>изменить</button>
                }
                <button onClick={() => deleteSignUp(userUpdatedSignUp._id)}>удалить</button>
            </div>
        </div>
    );
};

export default SignUpCard;
