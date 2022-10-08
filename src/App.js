import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Plan from './pages/plan';
import Progress from './pages/progress';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/plan' element={<Plan />} />
          <Route exact path='/progress' element={<Progress />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
