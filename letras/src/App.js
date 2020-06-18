import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';

function App() {
  //#region STATES
  const [busquedaLetra, setBusquedaLetra] = useState({}); 
  const [letra, setLetra] = useState('');
  const [informacion, setInformacion] = useState({});
  //#endregion

  //#region USE EFFECT
  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;

    const consultarApiLetra = async () => {
      const {artista, cancion} = busquedaLetra
      const URL_CANCION = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const URL_ARTISTA = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios.get(URL_CANCION),
        axios.get(URL_ARTISTA)
      ]);

      setLetra(letra.data.lyrics)
      setInformacion(informacion.data.artists[0])
    }

    consultarApiLetra();
  }, [busquedaLetra, informacion]);
  //#endregion

  return (
    <Fragment>
      <Formulario 
        setBusquedaLetra={setBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-6">
            <Info informacion={informacion}/>
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
