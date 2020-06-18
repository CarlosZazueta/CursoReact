import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import ListarImagenes from './components/ListarImagenes';

function App() {
  //#region HOOKS
  const [busqueda, setBusqueda] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [pagina_actual, setPaginaActual] = useState(1);
  const [total_paginas, setTotalPaginas] = useState(1);
  //#endregion

  //#region API CALL
  const consultarApi = async () => {
    const imagenesPorPagina = 30;
    const API_KEY = '17030501-64e0eb491929c06338bfea187';
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${pagina_actual}`;

    const resultado = await axios.get(URL);

    setImagenes(resultado.data.hits);

    // Calcular el total de paginas
    const calcularTotalPaginas = (Math.ceil(resultado.data.totalHits / imagenesPorPagina));
    setTotalPaginas(calcularTotalPaginas);

    // Mover la pantalla al inicio 
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({
      behavior: 'smooth'
    });
  }
  //#endregion

  //#region USE EFFECT
  useEffect(() => {
    if (busqueda.trim() === '') return;
    consultarApi();
  }, [busqueda, pagina_actual]);
  //#endregion

  //#region PAGINACION
  const paginaAnterior = () => {
    const nuevaPaginaActual = pagina_actual - 1;
    if (nuevaPaginaActual === 0) return;
    setPaginaActual(nuevaPaginaActual);
  }

  const paginaSiguiente = () => {
    const nuevaPaginaActual = pagina_actual + 1;
    if (pagina_actual === total_paginas) return;
    setPaginaActual(nuevaPaginaActual);
  }
  //#endregion

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        <Formulario 
          setBusqueda={setBusqueda}
        />
      </div>
      <div className="row justify-content-center">
        <ListarImagenes imagenes={imagenes}/>

        {pagina_actual === 1 ? null : (         
          <button 
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaAnterior}
          > &laquo; Anterior</button>
        )}

        {pagina_actual === total_paginas ? null : (         
          <button 
            type="button"
            className="btn btn-info"
            onClick={paginaSiguiente}
          >Siguiente &raquo;</button>
        )}
      </div>
    </div>
  );
}

export default App;
