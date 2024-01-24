import './App.css';
import Navbar from './components/Navbar-Section/Navbar';
import HeroMeme from './components/Hero-Section/HeroMeme';
import AboutTale from './components/About-Us-Tale/AboutTale';
import MoonMap from './components/Moon-Map/moonmap';
import TeamAbout from './components/Team-All/teamabout';
import PumpInfo  from './components/Utility-Pump/pumpinfo';
import PumpNomic from './components/Pumpnomics/pumpnomic';


function App() {
  return (
    <div>
      <Navbar/>
      <HeroMeme/>
      <AboutTale/>
      <MoonMap/>
      <TeamAbout/>
      <PumpInfo/>
      <PumpNomic/>
    </div>    
  );
}

export default App;
