import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {
  // States del formulario
  const [search, setSearch] = useState({
      city: '',
      country: ''
  });

  const [do_query, setDoQuery] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  // Obtener ciudad y pais
  const {city, country} = search;

  useEffect(() => {
    const apiQuery = async () => {
      if (do_query) {
        const appid = 'bbe9e8ceed416b4f3afbbd8651c5ea81';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${appid}`;
        const response = await (await fetch(url)).json();

        // Detectar si se encontró la ciudad
        if (response.cod === "404") {
          setError(true);
          setDoQuery(false);
        } else {
          setError(false);
          setResult(response);
          setDoQuery(false);
        }
      }
    }

    apiQuery();

  }, [do_query, city, country, result.cod]);

  let component = (error) ? <Error text="No hay resultados"/> : <Weather result={result} />

  return (
    <Fragment>
      <Header title="Clima React App"/>

      <div className="contenedor-form bg-light rounded-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <Form 
                search={search}
                setSearch={setSearch}
                setDoQuery={setDoQuery}
              />
            </div>
            <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
