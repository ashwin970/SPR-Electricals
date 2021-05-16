import Navbar from './components/Navbar';
import Slides from './components/Slides';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';
import 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Slides/>
        <About/>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
