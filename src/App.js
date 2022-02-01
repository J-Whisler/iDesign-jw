import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Main from './pages/Main/Main';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactMe from './pages/ContactMe/ContactMe';
import MyProjects from './pages/MyProjects/MyProjects';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/projects" element={<MyProjects />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
