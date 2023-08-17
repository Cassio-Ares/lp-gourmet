import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import History from './Components/History';
import Menu from './Components/Menu'
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <History/>
     <Menu/>
     <Contact/>
    </div>
  );
}

export default App;
