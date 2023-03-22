import './App.css';
import Dado from './dado.js';
import React, {useState} from 'react';

function App() {
  function generarValor(){
    return Math.trunc(Math.random()*6)+1
  }
  function tirarDados(){
    setValor1(generarValor());
    setValor2(generarValor());
    setValor3(generarValor());
  }

  const [valor1,setValor1] = useState(generarValor());
  const [valor2,setValor2] = useState(generarValor());
  const [valor3,setValor3] = useState(generarValor());

  return (
    <div>
      <Dado valor={valor1}/>
      <Dado valor={valor2}/>
      <Dado valor={valor3}/>
      <button onClick={tirarDados}>Tirar dados</button>
    </div>
  );
}

export default App;
