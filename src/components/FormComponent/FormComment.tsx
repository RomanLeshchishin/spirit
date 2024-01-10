import styles from "./styles/FormComment.module.scss"
import {Form, Input} from "antd";
const { TextArea } = Input;

interface FormCommentProps {
    namePlaceholder: string,
    phonePlaceholder: string,
    emailPlaceholder: string,
    textAreaPlaceholder: string,
    heightTextArea: number,
}

const FormComment = ( { namePlaceholder, phonePlaceholder, emailPlaceholder, textAreaPlaceholder, heightTextArea } : FormCommentProps ) => {
    return (
        <>
            <div className={styles.containerForm1}>
                <Form className={styles.form1}>
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
                    </div>
                </Form>
            </div>
        </>
    );
};

export default FormComment;
