import React, { Fragment, useState } from 'react'
import Error from './Error' 

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {

    // Definir State
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Funcion para leer presupuesto
    const definirPresupuesto = e => {
        let presupuesto = parseInt(e.target.value, 10);
        setCantidad(presupuesto)
    }

    // Submit para definir presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }

        // Validado
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);
    }

    return ( 
        <Fragment>
           <h2>Coloca tu presupuesto</h2>

           {error ? <Error mensaje="El presupuesto es incorrecto" /> : null} 

           <form
                onSubmit={agregarPresupuesto}
           >
               <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
               />
               <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir Presupuesto"
               />
           </form>
        </Fragment>
    );
}
 
export default Pregunta;