import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Services />
        <Slider />
        <Portfolio />
        <Offers />
        <hr />

        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;
