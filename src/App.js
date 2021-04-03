
import './App.css';
import Character from './components/Character'
import { useState , useEffect} from 'react';
import axios from 'axios';

function App() {
  

  return (
    <div className="App"> 
     <Character />
    </div>
  );
}

export default App;
