import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const CounrtySelect = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useMoneda = (label, initialState, options) => {
    // State de nuestro custom hook
    const [state, setState] = useState('');

    const SelectMoneda = () => (
        <Fragment>
            <Label>{label}</Label>
            <CounrtySelect
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">--Seleccione--</option>
                {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))};
            </CounrtySelect>
        </Fragment>
    );
    
    // Retornar state, interfaz y fn que modifica el state
    return [state, SelectMoneda, setState];
}

export default useMoneda;