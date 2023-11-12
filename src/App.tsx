import './App.css'
import PhotoSlider from "./components/PhotoSlider/PhotoSlider";
import SiteStatistic from "./components/SiteStatistic/SiteStatistic";

function App() {
  return (
    <>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "20px"}}>
            <PhotoSlider/>
            <SiteStatistic/>
        </div>
    </>
  )
}

export default App
