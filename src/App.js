import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Portofolio from "./pages/Portofolio/Portofolio";
import Contact from "./pages/Contact/Contact";
import ProgressBar from "./pages/ProgressBar/ProgressBar";
import BurgerMenu from "./pages/About/BurgerMenu/BurgerMenu";
import Feedback from "./pages/Feedback/Feedback";
function App() {
  return (
    <div className="App">
      <BurgerMenu />
      <Home />
      <About />
      <ProgressBar />
      <Skills />
      <Portofolio />
      <Feedback />
      <Contact />
    </div>
  );
}

export default App;
