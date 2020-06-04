import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Error from './Error';

import shortid from 'shortid';

const Formulario = ({setGasto, setCrearGasto}) => {

    // States
    const [nombre_gasto, setNombreGasto] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Cuando el usuario agregue un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // Validar
        if (cantidad < 1 || isNaN(cantidad) || nombre_gasto.trim() === '') {
            setError(true); 
            return;
        }

        setError(false);

        // Construir gasto
        const gasto = {
            nombre_gasto,
            cantidad,
            id: shortid.generate()
        };

        // Pasar al componente principal (App.js)
        setGasto(gasto);
        setCrearGasto(true);

        // Reset form
        setNombreGasto('');
        setCantidad(0);
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" /> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre_gasto}
                    onChange={e => setNombreGasto(e.target.value)} 
                />
            </div>

            <div className="campo">
                <label>Cantidad</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 200" 
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input 
                type="submit"
                className="u-full-width button-primary"
                value="Agregar Gasto"
            />
        </form>
    );
}
 
Formulario.proTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}

export default Formulario;