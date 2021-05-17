import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Enquiry from './components/Enquiry';
import './App.css';
import 'react-router-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
       
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/enquiry' component={Enquiry} />
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
