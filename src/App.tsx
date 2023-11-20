import './App.module.scss';
import './styles/variable.scss';
import PhotoSlider from "./components/PhotoSlider/PhotoSlider";
import SiteStatistic from "./components/SiteStatistic/SiteStatistic";
import Header from "./components/HeaderComponents/Header.tsx";

import styles from "./App.module.scss";

function App() {
  return (
    <>
        <div className={styles.container}>
            <Header />
            <PhotoSlider/>
            <SiteStatistic/>
        </div>
    </>
  )
}

export default App
