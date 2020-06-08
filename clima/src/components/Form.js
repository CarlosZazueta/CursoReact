import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Error from './Error';

const Form = ({search, setSearch, setDoQuery}) => {
    // State de error
    const [error, setError] = useState(false);

    // Obtener ciudad y pais
    const {city, country} = search;

    // Funcion para guardar los elementos en el state
    const handlechange = e => {
        // Actualizar state
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    // Submit
    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if (city.trim() === '' || country.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        // Pasar al componente principal
        setDoQuery(true);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error text="Error! Favor de llenar todos los campos." /> : null}
            <div className="col-sm-12 form-group">
                <label className="font-weight-bold" htmlFor="city">Ciudad</label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    className="form-control text-dark"
                    placeholder="Escribe la ciudad"
                    value={city}
                    onChange={handlechange}
                />
            </div>
            
            <div className="col-sm-12 form-group">
                <label className="font-weight-bold" htmlFor="country">País</label>
                <select 
                    name="country"
                    id="country"
                    className="form-control text-dark"
                    value={country}
                    onChange={handlechange}
                >
                    <option value="">--Seleccione un país--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>

            <div className="text-center col-sm-12 form-group">
                <button
                    type="submit"
                    className="shadow btn btn-warning btn-md btn-block mt-4"
                >
                    BUSCAR CLIMA
                </button>
            </div>
        </form>
    );
}
 
Form.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setDoQuery: PropTypes.func.isRequired
}

export default Form;