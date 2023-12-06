import React from "react";
import styles from "./styles/Form.module.scss"
import {DatePicker, Form, Input, Select, TimePicker} from "antd";
import TitleSection from "../TitleComponent/TitleSection.tsx";
const { TextArea } = Input;

const dateFormat = 'DD/MM/YYYY';

interface FormProps {
    namePlaceholder: string,
    phonePlaceholder: string,
    emailPlaceholder: string,
    textAreaPlaceholder: string,
    heightTextArea: number,
    buttonPlaceholder?: string,
    numPeoplePlaceholder?: string,
    selectPlaceholder?: string,
    optionsSelect?: any,
    datePickerPlaceholder?: string,
    timePickerPlaceholder?: string,
    bigSize?: boolean,
}

const FormCustom = ( { namePlaceholder, phonePlaceholder, emailPlaceholder, textAreaPlaceholder, heightTextArea, buttonPlaceholder,
                         numPeoplePlaceholder, selectPlaceholder, optionsSelect, datePickerPlaceholder,
                         timePickerPlaceholder, bigSize } : FormProps ) => {
    return (
        <>
            {bigSize ? <div className={styles.containerForm2}>
                <Form className={styles.form2}>
                    <div className={styles.contentContainer}>
                        <div className={styles.contentForm2}>
                            <div className={styles.contentLeft}>
                                <Form.Item>
                                    <Input placeholder={namePlaceholder} className={styles.input2} />
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder={phonePlaceholder} className={styles.input2} />
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder={emailPlaceholder} className={styles.input2} />
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder={numPeoplePlaceholder} className={styles.input2} />
                                </Form.Item>
                                <Form.Item>
                                    <Select
                                        defaultValue={selectPlaceholder}
                                        className='select'
                                        dropdownStyle={{backgroundColor: '#8D6D5A', color: '#fff'}}
                                        options={optionsSelect}
                                    />
                                </Form.Item>
                            </div>
                            <div className={styles.contentRight}>
                                <Form.Item>
                                    <DatePicker placeholder={datePickerPlaceholder} format={dateFormat} className={styles.input2} />
                                </Form.Item>
                                <Form.Item>
                                    <TimePicker placeholder={timePickerPlaceholder} className={styles.input2} />
                                </Form.Item>
                                <Form.Item>
                                    <TextArea placeholder={textAreaPlaceholder} rows={heightTextArea} className={styles.textArea2} />
                                </Form.Item>
                            </div>
                        </div>
                        <button className={styles.btnForm2}>{buttonPlaceholder}</button>
                    </div>
                </Form>
            </div> : <div className={styles.containerForm1}>
                <Form className={styles.form1}>
                    <div className={styles.title1}>
                        <TitleSection textTitle={'Задайте нам вопрос'} colorTitle={'#fff'} />
                    </div>
                    <div className={styles.contentForm1}>
                        <div className={styles.containerInputs1}>
                            <div>
                                <Form.Item>
                                    <Input placeholder={namePlaceholder} className={styles.input1} />
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder={phonePlaceholder} className={styles.input1} />
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder={emailPlaceholder} className={styles.input1} />
                                </Form.Item>
                            </div>
                            <Form.Item>
                                <TextArea rows={heightTextArea} placeholder={textAreaPlaceholder} className={styles.textArea1} />
                            </Form.Item>
                        </div>
                        <button className={styles.btnForm1}>{buttonPlaceholder}</button>
                    </div>
                </Form>
            </div>}
        </>
    );
};

export default FormCustom;
