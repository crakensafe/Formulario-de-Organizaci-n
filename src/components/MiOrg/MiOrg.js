import { useState } from 'react';
import './MiOrg.css';

const MiOrg = (props) => {

    console.log(props)

    //useState
    //const [nombreVariable, funcionActualizada] = useState(valorInicial)
    //const [mostrar, actualizarMostrar] = useState(true);

    //const ManejarClick = () => {
    //    return console.log('Mostrar / Ocultar elemento', !mostrar)
    //    actualizarMostrar(!mostrar);
    //};

    return <section className='orgSection'>
        <h3 className='titulo'>Mi Organización</h3>
        <img src='./img/add.png' alt='add' onClick={props.cambiarMostrar}></img>
    </section>
};

export default MiOrg;