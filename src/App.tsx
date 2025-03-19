import "./App.css";
import Navbar from "./components/navbar/Navbar";
import BestDeal from "./sections/BestDeal";
import Featured from "./sections/Featured";
import Home from "./sections/Home";
import Properties from "./sections/Properties";
import VideoView from "./sections/VideoView";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Home />
      <Featured />
      <VideoView />
      <BestDeal />
      <Properties />
      <div className="h-screen"></div>
    </div>
  );
}

export default App;
