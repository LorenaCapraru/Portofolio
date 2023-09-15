import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Portofolio from "./pages/Portofolio/Portofolio";
import Contact from "./pages/Contact/Contact";
import ProgressBar from "./pages/ProgressBar/ProgressBar";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <ProgressBar />
      <Skills />
      <Portofolio />
      <Contact />
    </div>
  );
}

export default App;
