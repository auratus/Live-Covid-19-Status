import logo from './logo.svg';
import './App.css';
import IndiaStats from './IndiaStats';
import Preloader from "./Preloader";
import StateWise from "./StateWise";
import Navigation from "./navigation.jsx";
import Footer from "./footer";

function App() {
  return (
    <>
      <Preloader />
      <Navigation/>
      <IndiaStats />
      <StateWise/>
<Footer/>
    </>
  );
}

export default App;
