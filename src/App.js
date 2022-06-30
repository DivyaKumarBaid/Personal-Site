import './App.css';
import NavBar from './components/NavBar';
import Overlay from './components/Overlay';
import ScrollOut from "scroll-out";
import {useEffect} from "react"



function App() {

  useEffect(() => {
    ScrollOut({
      targets: '.navLinks,.navLogo'
    });
  },[]);

  return (
    <div className="App">
      <Overlay />
      <NavBar/>
    </div>
  );
}

export default App;
