import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Portofolio from "./pages/Portofolio/Portofolio";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Portofolio />
      <Contact />
    </div>
  );
}

export default App;
