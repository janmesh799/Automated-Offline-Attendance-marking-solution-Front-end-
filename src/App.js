import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import { store } from "./store/store"
// import Navbar from './components/Navbar';
import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Notfound from './pages/Notfound';
import AllCourses from './pages/AllCourses';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          {

            // <Navbar />
          }
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<Notfound />} />
            <Route path='/allCourses' element={<AllCourses />} />
            
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
