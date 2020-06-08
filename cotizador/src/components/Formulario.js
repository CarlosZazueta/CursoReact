import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Helpers
import { obtenerDiferenciaYears, calcularMarca, obtenerPlan } from '../helpers';

// Styled components
const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    border-radius: 10px;
`;

const Formulario = ({setResumen, setCargando}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false);

    // Extraer valores del state
    const { marca, year, plan } = datos;

    // Leer los datos del formulario
    const getInformacionFormulario = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }  

    // Cuando el usuario haga submit
    const cotizarSeguro = e => {
        e.preventDefault();

        if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        /* 
            [ToDo]
            * Obtener la diferencia de años en base al año 2000
            * Por cada año menos, restar el 3%

            * Americano 15%
            * Asiatio 5%
            * Europeo 30%

            * Plan básico 20%
            * Plan Completo 50%

            * Total
            [All Done]
        */

        // Año base
        let resultado = 2000;

        // Diferencia del 3% por año
        const diferencia = obtenerDiferenciaYears(year);
        resultado -= ((diferencia * 3 ) * resultado) / 100;

        // Calcular el resultado segun la marca
        resultado *= calcularMarca(marca);

        // Calcular el resutado segun el plan
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

        setCargando(true);

        setTimeout(() => {
            //Elimina spinner
            setCargando(false);

            // Pasa informacion a componente App.js
            setResumen({
                cotizacion: Number(resultado),
                datos
            });
        }, 2000);

    }

    return ( 
        <form
            onSubmit={cotizarSeguro}
        >
        
            {error ? <Error>Todos los campos son obligatorios</Error> : null}

            <Field>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={getInformacionFormulario}
                >
                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                </Select>
            </Field>
            <Field>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getInformacionFormulario}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={getInformacionFormulario}
                /> Básico

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"} 
                    onChange={getInformacionFormulario}
                /> Completo
            </Field>

            <Button type="submit">Cotizar</Button>
        </form>
    );
}

Formulario.propTypes = {
    setResumen: PropTypes.func.isRequired,
    setCargando: PropTypes.func.isRequired
}

export default Formulario;