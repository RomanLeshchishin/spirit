import PhotoSlider from "./components/PhotoSlider/PhotoSlider";
import SiteStatistic from "./components/SiteStatistic/SiteStatistic";
import Header from "./components/HeaderComponents/Header.tsx";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
        <div className={styles.container}>
            <Header />
            <PhotoSlider/>
            <SiteStatistic/>
            <Footer/>
        </div>
    </>
  )
}

export default App
