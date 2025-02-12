import Navbar from "./components/Navbar";
import Body from "./components/Body";
import DeliveryOptions from "./components/DeliveryOptions";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Body />
        <DeliveryOptions />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;