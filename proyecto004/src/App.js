import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  function generarAleatorios(){
    const vec = new Array(5);
    for(let i = 0; i < vec.length; i++){
      vec[i] = Math.trunc(Math.random() * 10);
    }
    setNumeros(vec);
  }

  const [numeros, setNumeros] = useState([0,0,0,0,0]);
  return (
    <div>
      <p>Numeros aleatorios:</p> {numeros.map(num =>(<p>{num}</p>))}
      <button onClick={generarAleatorios}>Generar</button>
    </div>
  );
}

export default App;
