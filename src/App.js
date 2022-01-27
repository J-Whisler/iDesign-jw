import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Main from './pages/Main/Main';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
