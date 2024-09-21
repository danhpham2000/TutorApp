import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import LandingPageSection from './components/LandingPageSection';
import TutorCard from './components/TutorCard';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPageSection/>
      <TutorCard/>
      <TutorCard/>
      <TutorCard/>
    </div>
  );
}

export default App;
