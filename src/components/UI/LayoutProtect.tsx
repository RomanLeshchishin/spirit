import {Navigate, Outlet} from "react-router-dom";
import styles from "../MainComponents/MainPage.module.scss";
import {Role} from "../../models/Role.ts";
import useStore from "../../store";

export interface LayoutProps{
    role: Role
}

const LayoutProtect = ({role} : LayoutProps) => {
    const store = useStore();
    return (
        <>
            {store.role == role ?
                <div className={styles.content}>
                    <Outlet/>
                </div>
                :
                <Navigate to={'/registration'}/>
            }
        </>
    );
};

export default LayoutProtect;
