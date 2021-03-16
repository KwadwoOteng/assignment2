import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Division from "./components/Division";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Nav from "./components/Nav";

function App() {
  return (
    <section>
      <Nav />
      <Header />
      <About />
      <Division />
      <Inventory />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
