import Navbar from './components/Navbar';
import Slides from './components/Slides';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slides/>
      <About/>
    </div>
  );
}

export default App;
