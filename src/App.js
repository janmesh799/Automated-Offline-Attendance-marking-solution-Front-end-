import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Notfound from './pages/Notfound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
