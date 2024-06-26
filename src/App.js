import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Formulario from './components/formulario/Formulario.js';
import MiOrg from './components/MiOrg/MiOrg.js';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);

  //Ternario --> condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  };

  return (
    <div>
      <Header/>
      { mostrarFormulario === true ? <Formulario /> : <></>}
      <MiOrg cambiarMostrar = {cambiarMostrar}/>
    </div> 
  );
};

export default App;
