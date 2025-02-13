import './ListaOpciones.css';

const ListaOpciones = (props) => {

    //El metodo map se utiliza para recorrer arreglos
    //su estructura es: arreglo.map( (equipo, index) => {
    //  return <option></option)
    //} );

    const equipos = [
        'Programación',
        'Front End',
        'Data Science',
        'Devops',
        'UX y Diseño',
        'Móvil',
        'Innovación y Gestión',
    ]

    const manejarCambio = (e) => {
        console.log('cambio', e.target.value)
        props.actualizarEquipo(e.target.value);
    };

    return <div className='lista-opciones'>
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value='' disabled defaultValue='' hidden>Seleccionar equipo...</option>
            { equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option>) }
        </select>
    </div>
};

export default ListaOpciones;