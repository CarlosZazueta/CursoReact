import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Helpers
import { primerLetraMayus } from '../helpers';

const ResumenContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    const {marca, year, plan} = datos;

    if (marca === '' || year === '' || plan === '') {
        return null;
    }

    return (
        <ResumenContainer>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li><b>Marca:</b> {primerLetraMayus(marca)} </li>
                <li><b>Plan:</b> {primerLetraMayus(plan)} </li>
                <li><b>Año del Auto:</b> {year} </li>
            </ul>
        </ResumenContainer>
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;