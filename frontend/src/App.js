import NavBar from './Components/NavBar';
import './App.css';
import Home from './Components/Home';
import WeatherApi from './Components/WeatherApi';
import { useContext } from 'react';
import { NftContext } from './context/NftContext';

function App() {
  const {walletConnected} = useContext(NftContext);
  return (
    <div className="App">
      <NavBar />

      {(!walletConnected) ?  <WeatherApi /> : <Home /> }
      
      
    </div>
  );
}

export default App;
