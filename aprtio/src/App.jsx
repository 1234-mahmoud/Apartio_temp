import "./style/App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import SideBar from "./components/SideBar";
import Statistics from "./components/Statistics";
import LivingSpace from "./components/LivingSpace";
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <SideBar />
      <Statistics/>
      <LivingSpace/>
    </div>
  );
}

export default App;
