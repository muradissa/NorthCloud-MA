import logo from './logo.svg';
import './App.css';
import Home from './components/screens/home/Home';
import Navbar from './components/global/Navbar';
import Body from './components/screens/Body';
import Footer from './components/global/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Home/> */}
      <div>
            <Navbar/>
        </div>
        <div>
            <Body/>
        </div>
        {/* <div>
            Examples
        </div>
        <div>
            what we can do
        </div>
        <div>
            Contact Us
        </div> */}
        <div>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
