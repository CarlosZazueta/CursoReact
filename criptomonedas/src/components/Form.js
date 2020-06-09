import React, { useEffect, useState } from 'react';

// Additiona libs
import styled from '@emotion/styled';
import Axios from 'axios';

// Components
import Error from './Error';

// Custom Hooks
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';


const SubmitButton = styled.button`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    padding: 8px;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    text-transform: capitalize;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Form = () => {
    // State listado de criptomonedas
    const [cryptoList, setCrypto] = useState([]);
    const [error, setError] = useState(false);

    const MONEDAS = [
        {code: 'USD', name: 'Dolar de Estados Unidos'},
        {code: 'MXN', name: 'Peso Mexicano'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'Libra Esterlina'}
    ];

    // Custom hook
    const [coin, SelectCoin] = useMoneda('Elige tu Moneda', '', MONEDAS);
    const [crypto, SelectCrypto] = useCriptomoneda('Elige tu criptomoneda', '', cryptoList);

    // Ejecutar llamado a la Api
    useEffect(() => {
        const apiQuery = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await Axios.get(url);

            setCrypto(result.data.Data);
        }

        apiQuery();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        // Validar que los campos esten llenos
        if (coin === '' || crypto === '') {
            setError(true);
            return;
        }

        // Pasar datos al componente principal
        setError(false);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error text="Favor de llenar todos los campos" /> : null}

            <SelectCoin />
            <SelectCrypto />

            <SubmitButton type="submit"> calcular </SubmitButton>
        </form>
    );
}
 
export default Form;