import useStore from "../../store";
import {Navigate, Outlet} from "react-router-dom";
import Header from "../HeaderComponent/Header.tsx";
import Footer from "../FooterComponents/Footer.tsx";

const LayoutProtect = () => {
    const store = useStore()
    return (
        <div>
            {store.authUser != null
                ?
                <>
                    <Header/>
                    <Outlet/>
                    <Footer/>
                </>
                :
                <Navigate to={'/registration'}/>
            }
        </div>
    );
};

export default LayoutProtect;
