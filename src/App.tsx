import './App.module.scss';
import './styles/variable.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CommentPage from "./components/CommentComponent/CommentPage.tsx";
import MainPage from "./components/MainComponents/MainPage.tsx";
import OurHorsePage from "./components/HorseComponents/OurHorsePage.tsx";
import SignUp from "./components/SignUpComponent/SignUp.tsx";
import styles from "./App.module.scss";
import OurCoachesPage from "./components/CoacheComponents/OurCoachesPage.tsx";
import Layout from "./components/Layout/Layout.tsx";
import Login from "./components/AuthorizationComponents/Login.tsx";
import Registration from "./components/AuthorizationComponents/Registration.tsx";

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
                        <Route path={'signup'} element={<SignUp />} />
                    </Route>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/register"} element={<Registration/>}/>
                </Routes>
            </BrowserRouter>
        </div>
  )
}

export default App
