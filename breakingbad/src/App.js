import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3rem;
  flex-direction: column;
`;


function App() {

  // State de frases
  const [quote, setQuote] = useState({});

  // useEffect para generar una frase al cargar la pagina
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const apiQuote = await (await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')).json();
    setQuote(apiQuote[0]);
  }

  return (
    <Contenedor>
      <Frase 
        quote={quote}
      />
      <Boton
        onClick={consultarApi}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
