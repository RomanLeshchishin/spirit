import './App.module.scss';
import './styles/variable.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CommentPage from "./components/CommentComponent/CommentPage.tsx";
import MainPage from "./components/MainComponents/MainPage.tsx";
import OurHorsePage from "./components/HorseComponents/OurHorsePage.tsx";

import styles from "./App.module.scss";

function App() {
  return (
        <div className={styles.container}>
            <BrowserRouter>
                <Routes>
                    <Route path={'comments'} element={<CommentPage />} />
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'horses'} element={<OurHorsePage />} />
                </Routes>
            </BrowserRouter>
  )
}

export default App
