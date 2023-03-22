import './App.css';
import React, {useState} from 'react';

function App() {
  function borrar(cod) {
    const temp = articulos.filter((art)=>art.codigo !== cod);
    setArticulos(temp)
  }

  const [articulos, setArticulos] = useState([{
    codigo: 1,
    descripcion: 'papas',
    precio: 12.52
  }, {
    codigo: 2,
    descripcion: 'naranjas',
    precio: 21
  }, {
    codigo: 3,
    descripcion: 'peras',
    precio: 18.20
  }]);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Borrar?</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(art => {
            return(
              <tr key={art.codigo}>
                <td>{art.codigo}</td>
                <td>{art.descripcion}</td>
                <td>{art.precio}</td>
                <td><button onClick={() => borrar(art.codigo)}>Borrar</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
