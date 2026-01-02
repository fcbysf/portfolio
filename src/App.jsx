import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Articles from "./components/Articles";
import OpenSource from "./components/OpenSource";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <About />
      <Services />
      <Articles />
      <OpenSource />
      <Footer />
    </BrowserRouter>
  )
}

export default App
