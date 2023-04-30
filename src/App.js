import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import { store } from "./app/store";
import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Notfound from './pages/Notfound';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import Dashboard from './pages/Dashboard';

function App() {
  // const auth = true;
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
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
          </Router>
          <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
