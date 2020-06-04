import React, { useState } from 'react';

const Formulario = () => {

    // States
    const [nombre_gasto, setNombreGasto] = useState('');
    const [cantidad, setCantidad] = useState(0);

    // Cuando el usuario agregue un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // Validar


        // Construir gasto


        // Pasar al componente principal (App.js)


        // Reset form
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

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
 
export default Formulario;