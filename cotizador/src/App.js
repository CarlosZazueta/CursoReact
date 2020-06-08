import React, { useState } from 'react';

// My components
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

// Styled components
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormularioContainer = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  // States
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, setCargando] = useState(false);

  // Extraer datos
  const {cotizacion, datos} = resumen;

  return (
    <Container>
      <Header title = 'Cotizador de seguros' />

      <FormularioContainer>
        <Formulario 
          setResumen = {setResumen}
          setCargando = {setCargando} 
        />

        {cargando ? <Spinner /> : null}

        <Resumen datos = {datos} />

        {!cargando ? <Resultado cotizacion = {cotizacion} /> : null}
      </FormularioContainer>
    </Container>
  );
}

export default App;
