import { useState } from "react";
import "./Formulario.css"
import Campotexto from "../campoTexto/CampoTexto";
import ListaOpciones from '../listaOpciones/ListaOpciones';
import Boton from "../botones/boton";

const Formulario = () => {

    const [nombre, actualizarNombre] = useState('');
    const [puesto, actualizarPuesto] = useState('');
    const [foto, actualizarFoto] = useState('');
    const [equipo, actualizarEquipo] = useState('');

    const ManejarEnvio = (event) => {
        event.preventDefault();
        console.log('Manejar envio');
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        };
        console.log(datosAEnviar)
    };

    return <section className="formulario">
            <form onSubmit={ManejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campotexto 
                    titulo = 'Nombre' 
                    placeholder='Ingresar titulo' 
                    required valor={nombre} 
                    actualizarValor={actualizarNombre}
                />
                <Campotexto 
                    titulo = 'Puesto' 
                    placeholder='Ingresa puesto'
                    required
                    valor={puesto} 
                    actualizarValor={actualizarPuesto}
                />
                <Campotexto 
                    titulo = 'Foto' 
                    placeholder='Ingesa enlace de foto' 
                    required
                    valor={foto} 
                    actualizarValor={actualizarFoto}
                />
                <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                />
                <Boton texto = 'Crear' />
            </form>
        </section>
};

export default Formulario;