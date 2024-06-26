import { useState } from 'react';
import './CampoTexto.css';

const Campotexto = (props) => {

    const [valor, setValor] = useState('');

    console.log('Datos externos: ', props);
    const placeholderModificador = `${props.placeholder}...`;

    const manejarCambio = (e) => {
        console.log(' Cambio ', e.target.value)
        props.actualizarValor(e.target.value)
    };

    return <div className='campo-texto'>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificador} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
};

export default Campotexto;