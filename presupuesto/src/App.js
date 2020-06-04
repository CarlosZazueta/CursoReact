import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
import Error from './components/Error';

function App() {

  // Definir state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrar_pregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crear_gasto, setCrearGasto] = useState(false);
  const [error, setError] = useState(false);

  const mensaje = 'No hay presupuesto disponible';
   
  // useEffect que actualice el restante
  useEffect(() => {
    if (crear_gasto) {

      if(gasto.cantidad > restante) {
        setError(true)
        return;
      }

      setError(false);

      // Agrega el nuevo presupuesto
      setGastos([ ...gastos, gasto ]);

      // Resta del presupuesto actual
      const presupuesto = restante - gasto.cantidad;
      setRestante(presupuesto);
      
      // Reset a false
      setCrearGasto(false);
    }
  }, [gasto, crear_gasto, gastos, restante]); 


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        
        <div className="contenido-principal contenido">

          {error ? <Error mensaje={mensaje}/> : null}

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
                  <Formulario 
                    setGasto = {setGasto}
                    setCrearGasto = {setCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos = {gastos}
                  />
                  <ControlPresupuesto 
                    presupuesto = {presupuesto}
                    restante = {restante}
                  />
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
