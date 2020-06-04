import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Formulario from './components/Formulario.jsx';
import Cita from './components/Cita.jsx';

function App() {

  // Citas en local storage
  let citasExistentes = JSON.parse(localStorage.getItem('citas'));

  if (!citasExistentes) {
    citasExistentes = [];
  }

  // Citas
  const [citas, guardarCitas] = useState(citasExistentes);

  // useEffect para realizar ciertas operaciones cuando cambie el state
  useEffect(() => {
    if (citasExistentes) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasExistentes]);

  // function para tomar citas actulaes y agregar nuevas
  const crearCita = cita => {
    guardarCitas([ ...citas, cita ]);
  }

  // function para eliminar citas por id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  // Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Adminstrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita = {crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
          {citas.map(cita => (
            <Cita 
              key = {cita.id}
              cita = {cita}
              eliminarCita = {eliminarCita}
            />
          ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default App;
