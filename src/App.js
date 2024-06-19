// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import HeroSection from "./components/Hero-section/HeroSection";
import Bio from "./components/BIo-section/Bio"
import Skill from './components/skill/Skill'
import Portofolio from './components/portofolio/portofolio'
import Footer from './components/Footer/Footer'
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Bio/>
      <Skill/>
      <Portofolio/>
      <Footer/>
    </div>
  );
}

export default App;
