import { useState } from 'react';

function App() {
  const [dias,setDias]=useState(['Lunes','Miercoles']);

  function cambioDias(e){
    const opciones = e.target.options
    const seleccionados = []
    for(let i = 0; i<opciones.length;i++){
      if(opciones[i].selected){
        seleccionados.push(opciones[i].value)
      }
    }
    setDias(seleccionados)
  }
  return (
    <div>
      <p><select multiple value={dias} onChange={cambioDias}>
      <option>Lunes</option>
      <option>Martes</option>
      <option>Miércoles</option>
      <option>Jueves</option>
      <option>Viernes</option>
      <option>Sábado</option>
      <option>Domingo</option>
      </select></p>
      Dias seleccionados:{dias.map((dias)=>{
          return (<p>{dias}</p>)
        }
        )}
    </div>
  );
}

export default App;
