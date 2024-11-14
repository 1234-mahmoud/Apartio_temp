import "./style/App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import SideBar from "./components/SideBar";
import Statistics from "./components/Statistics";
import LivingSpace from "./components/LivingSpace";
import Apartment from "./components/Apartment";
import Furniture from "./components/Furniture";
import Floor from "./components/Floor";
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <SideBar />
      <Statistics />
      <LivingSpace />
      <Apartment
        p1={"Apartio With Best Deals & Favours"}
        title={"Select Apartment Style"}
        p2={`Sed perspiciatis unde omnis iste natus error sit 
          voluptatem laudantium totam rem
          aperiam eaqu ipsa quae ab illo inventore
          veritatis met quasis.`}
      />
      <Furniture />
      <Apartment
        p1={"Apartio With Best Deals & Favours"}
        title={"Apartment Floor Plans"}
        p2={`Sed perspiciatis unde omnis iste natus error 
          sit voluptatem laudantium totam rem
           aperiam eaqu ipsa quae ab illo inventore veritatis met quasis.`}
      />
      <Floor/>
    </div>
  );
}

export default App;
