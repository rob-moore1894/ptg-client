import './App.css';
import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  useEffect(() => {
    document.title = "Sports Chiropractor Austin"
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
