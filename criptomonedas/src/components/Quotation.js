import React from 'react';

// Additional libs/components
import styled from '@emotion/styled';

//#region Styled Components
const ResultDiv = styled.div`
    color: #FFF;
`;
const Info = styled.p`
    font-size: 18px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    span {
        font-weight: bold;
    }
`;
const Price = styled.p`
    font-size: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    span {
        font-weight: bold;
    }
`;
//#endregion

//#region Quotation Component
const Quotation = ({result}) => {

    if (Object.keys(result).length === 0) return null;

    return (
        <ResultDiv>
            <Price>El precio es: <span>{result.PRICE}</span></Price>
            <Info>Precio más alto del día: <span>{result.HIGHDAY}</span></Info>
            <Info>Precio más bajo del día: <span>{result.LOWDAY}</span></Info>
            <Info>Variación útlimas 24hrs: <span>{result.CHANGEPCT24HOUR}</span></Info>
            <Info>Última actualización: <span>{result.LASTUPDATE}</span></Info>
        </ResultDiv>
    );
}
//#endregion
 
export default Quotation;