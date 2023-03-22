import './App.css';

function resultado(e){
  e.preventDefault();
  const v1 = parseInt(e.target.d1.value, 10);
  const v2 = parseInt(e.target.d2.value, 10);
  const suma = v1 + v2;
  alert('La suma es: '+suma);
}

function App() {
  return (
    <div >
      <form onSubmit={resultado}>
        <p>Ingrese un digito:
          <input type="number" name="d1"/>
        </p>
        <p>Ingrese otro digito: 
          <input type="number" name="d2"/>
        </p>
        <p><input type="submit" value="Calcular"/></p>
      </form>
    </div>
  );
}

export default App;
