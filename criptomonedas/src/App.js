import React, { useState, useEffect } from 'react';

// Additiona libs
import styled from '@emotion/styled';
import Axios from 'axios';

// Components
import Form from './components/Form';
import Quotation from './components/Quotation';
import image from './cryptomonedas.png';
import Spinner from './components/Spinner';

//#region Styled Components
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;
//#endregion

function App() {

  //#region States(S)
  const [coin, setCoin] = useState('');
  const [crypto, setCrypto] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  //#endregion

  //#region Ejecutar llamado a la Api
  useEffect(() => {
    
    const quoteCrytocurrency = async () => {
      // Evita la ejecicion la primera vez
      if (coin === '') return;

      // Consultar la api para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
      const result = await Axios.get(url);

      // Mostrar spinner
      setLoading(true);

      // Ocultar el spinner y mostrar el resultado
      setTimeout(() => {
        setLoading(false);
        setResult(result.data.DISPLAY[crypto][coin]);
      }, 3000);
    }

    quoteCrytocurrency();
    
  }, [coin, crypto]);
  //#endregion

  //#region Spinner
  const component = (loading) ? <Spinner /> : <Quotation result={result}/>;
  //#endregion

  return (
    <Container>
      <div>
        <Image 
          src={image}
          alt="imagen crypto"
        />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Form 
          setCoin={setCoin}
          setCrypto={setCrypto}
        />
        {component}
      </div>
    </Container>
  );
}

export default App;
