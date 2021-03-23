import './App.css';
import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'

function App() {

  useEffect(() => {
    document.title = "Sports Chiropractor Austin"
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
