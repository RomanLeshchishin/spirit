import {Form} from "antd";
import Logo from "../LogoComponent/Logo.tsx";

interface ModalProps {
    active: boolean,
    setActive: any,
    textBtn1: string,
    textBtn2: string,
    onClick1?: any,
    onClick2?: any,
    layout?: any,
}

import styles from "./styles/Modal.module.scss";

const Modal = ({ active, setActive, textBtn1, textBtn2, onClick1, onClick2, layout}: ModalProps) => {
    return (
        <>
            {active ?
                <div className={styles.modal} onClick={() => setActive(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <Form className={styles.modalForm}>
                            <div className={styles.headerContainer}>
                                <Logo width={154} height={50} />
                                <p className={styles.title}>Добавление отзыва</p>
                            </div>
                            <Form.Item className={styles.modelContent}>
                                {layout}
                            </Form.Item>
                            <div className={styles.btnContainer}>
                                <button className={styles.btnModal} onClick={onClick1}>{textBtn1}</button>
                                <button className={styles.btnModal} onClick={onClick2}>{textBtn2}</button>
                            </div>
                        </Form>
                    </div>
                </div>
                : <></>}
        </>
    );
}

export default Modal;
