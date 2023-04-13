import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './screens/Home'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
//import Login from './screens/Login';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/SignUp';
import Login from './screens/Login';
import ProfileNavbar from './components/ProfileNavbar';
import About from './components/About';
import { CartProvider } from './components/ContextReducer';
import Experience from './components/Experience';
import Skills from './components/Skills';
//import MyOrder from './screens/MyOrder';
//import Profile from './screens/Profile';

function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/SignUp" element={<Signup />}/>
          <Route exact path="/Login" element={<Login />}/>
          <Route exact path="/Profile" element={<ProfileNavbar />}/>
          <Route exact path="/About" element={<About />}/>
          <Route exact path="/Experience" element={<Experience />}/>
          <Route exact path="/Skills" element={<Skills/>}/>
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
