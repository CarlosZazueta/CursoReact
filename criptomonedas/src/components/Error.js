import React from 'react';

// Additiona libs
import styled from '@emotion/styled';

const ErrorMessage = styled.p`
    background-color: #B7322C;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

const Error = ({text}) => {
    return (
        <ErrorMessage> {text} </ErrorMessage>
    );
}
 
export default Error;