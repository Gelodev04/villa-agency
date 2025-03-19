import "./App.css";
import Navbar from "./components/navbar/Navbar";
import BestDeal from "./sections/BestDeal";
import ContactUs from "./sections/ContactUs";
import Featured from "./sections/Featured";
import Home from "./sections/Home";
import Properties from "./sections/Properties";
import VideoView from "./sections/VideoView";
import Footer from "./shared/Footer";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Home />
      <Featured />
      <VideoView />
      <BestDeal />
      <Properties />
<ContactUs/>
      <Footer/>
  
    </div>
  );
}

export default App;
