import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Projects from './Projects'
import Profile from './Profile'
import Team from './Team'
import Education from "./Education";
import Contact from "./Contact";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Profile />}/>
          <Route exact path="/profile" element={<Profile />}/>
          <Route exact path="/team" element={<Team />}/>
          <Route exact path="/projects" element={<Projects />}/>
          <Route exact path="/education" element={<Education />}/>
          <Route exact path="/about" element={<Contact />}/>
      </Routes>
      </div>
    </Router>
  );
};

export default App;
