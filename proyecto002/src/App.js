import './App.css';

/*function retornarAleatorio(){
  return Math.trunc(Math.random() * 10);
}*/

function mostrarTitulo(tit){
  return (
    <h1>{tit}</h1>
  );
}

/*function App() { //Primeras restricciones de JSX
  const siglo = 21;
  const persona = {
    nombre: 'Julian',
    edad: 34
  }

  return (
   <div>
    <h1>Titulo nivel 1</h1><hr/>
    <p>Estamos en el siglo {siglo}</p>
    <h3>Acceso a un objeto</h3>
    <p>{persona.nombre} tiene {persona.edad} años</p>
    <h3>Llamada a un metodo</h3>
    <p>Un valor aleatorio llamando a un metodo.</p>
    {retornarAleatorio()}
    <h3>Calculo inmediato de expresiones</h3>
    3 + 3 = {3+3}
   </div>
  );
}*/

/*function App(){ //Otras restricciones de JSX
  const buscadores = ['https://www.google.com',
  'https://www.bing.com',
  'https://www.yahoo.com'];

  return(
    <div>
      <a href={buscadores[0]}>Google</a><br/>
      <a href={buscadores[1]}>Bing</a><br/>
      <a href={buscadores[2]}>Yahoo</a><br/>
    </div>
  );
}*/

function App(){ //Obligatoriamente solo un elemento div que envuelva todo.
  return(
    <div>
      {mostrarTitulo('Hola Mundo')}
      {mostrarTitulo('Fin')}
    </div>
  );
}

export default App;
