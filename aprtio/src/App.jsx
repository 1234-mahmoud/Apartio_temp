import { useContext } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import SideBar from "./components/SideBar";
import "./style/App.css";
import { AppContext } from "./context/AppProvider";
function App() {
  const { show } = useContext(AppContext);
  return (
    <div className="App">
      <Header />
      <Slider />
      {show && <SideBar />}
    </div>
  );
}

export default App;
