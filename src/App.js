import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FindTutors from './components/FindTutors';
import BecomeTutor from './components/BecomeTutor';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/FindTutors" element={<FindTutors/>}/>
            <Route path="/BecomeTutor" element={<BecomeTutor/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/Login" element={<Login/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;