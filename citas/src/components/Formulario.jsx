import React, {Fragment, useState} from 'react';
import {v4 as uuid} from 'uuid';

const Formulario = ({crearCita}) => {

    // State de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '' 
    });

    // state para validaciones
    const [error, actualizarError] = useState(false);

    // Function handleChange para escritura en los inputs
    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    // Extraer valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    // function para realizar submit del formulario
    const submitCita = e => {
        e.preventDefault();

        // Validaciones
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || 
            hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        }

        // Quitar error
        actualizarError(false);

        // Asignar id
        cita.id = uuid();

        // Crear cita
        crearCita(cita);

        //Reiniciar form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className = "alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit = {submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type = "text"
                    name = "mascota"
                    className = "u-full-width"
                    placeholder = "Nombre Mascota"
                    onChange = {handleChange}
                    value = {mascota}
                />
                
                <label>Nombre Propietario</label>
                <input
                    type = "text"
                    name = "propietario"
                    className = "u-full-width"
                    placeholder = "Nombre Propietario"
                    onChange = {handleChange}
                    value = {propietario}
                />

                <label>Fecha</label>
                <input
                    type = "date"
                    name = "fecha"
                    className = "u-full-width"
                    onChange = {handleChange}
                    value = {fecha}
                />  

                <label>Hora</label>
                <input
                    type = "time"
                    name = "hora"
                    className = "u-full-width"
                    onChange = {handleChange}
                    value = {hora}
                />

                <label>Síntomas</label>
                <textarea
                    className = "u-full-width"
                    name = "sintomas"
                    onChange = {handleChange}
                    value = {sintomas}>
                </textarea>

                <button
                    type = "submit"
                    className = "u-full-width button-primary">
                    Agregar Cita
                </button>
            </form>
        </Fragment>
     );
}
  
 export default Formulario;