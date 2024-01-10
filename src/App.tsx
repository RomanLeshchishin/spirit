import './App.module.scss';
import './styles/variable.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CommentPage from "./components/CommentComponents/CommentPage.tsx";
import MainPage from "./components/MainComponents/MainPage.tsx";
import OurHorsePage from "./components/HorseComponents/OurHorsePage.tsx";
import SignUp from "./components/SignUpComponent/SignUp.tsx";
import styles from "./App.module.scss";
import OurCoachesPage from "./components/CoacheComponents/OurCoachesPage.tsx";
import Layout from "./components/UI/Layout.tsx";
import Login from "./components/AuthorizationComponents/Login.tsx";
import Registration from "./components/AuthorizationComponents/Registration.tsx";
import LayoutProtect from "./components/UI/LayoutProtect.tsx";
import Profile from "./components/ProfileComponent/Profile.tsx";
import PhotoGalleryPage from "./components/PhotoGalleryComponent/PhotoGalleryPage.tsx";
import PromotionsPage from "./components/PromotionComponents/PromotionsPage.tsx";

function App() {
  return (
        <div className={styles.container}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route element={<Layout />}>
                        <Route path={'comments'} element={<CommentPage />} />
                        <Route path={'horses'} element={<OurHorsePage />} />
                        <Route path={'coaches'} element={<OurCoachesPage />} />
                        <Route path={"photoGallery"} element={<PhotoGalleryPage />} />
                        <Route path={"promotions"} element={<PromotionsPage />} />
                    </Route>
                    <Route element={<LayoutProtect />}>
                        <Route path={'signup'} element={<SignUp />} />
                        <Route path={'profile'} element={<Profile />} />
                    </Route>
                    <Route path={"/login"} element={<Login />} />
                    <Route path={"/registration"} element={<Registration />} />
                </Routes>
            </BrowserRouter>
        </div>
  )
}

export default App
