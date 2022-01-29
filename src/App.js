import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Main from './pages/Main/Main';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactMe from './pages/ContactMe/ContactMe';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
