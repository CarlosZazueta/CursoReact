import React, { useState } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'

function App() {

  // Definir state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrar_pregunta, setMostrarPregunta] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        
        <div className="contenido-principal contenido">

          {mostrar_pregunta ? 
            (
              <Pregunta 
                setPresupuesto = {setPresupuesto}
                setRestante = {setRestante}
                setMostrarPregunta = {setMostrarPregunta}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario />
                </div>
                <div className="one-half column">
                  2
                </div>
              </div>
            ) 
          }
        </div>
      </header>
    </div>
  );
}

export default App;
