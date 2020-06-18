import React, {Fragment, useState, useEffect} from 'react';
import Axios from 'axios';

import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';


function App() {
  //#region STATES
  // Definir categoria y noticias
  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);
  //#endregion

  useEffect(() => {
    const apiQuery = async () => {
      const API_KEY = 'afa5264d37d14cda8fad95b79cdd2e46';
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${API_KEY}`;
      
      const result = await Axios.get(url);

      setNews(result.data.articles);
    }

    apiQuery();
  }, [category]);

  return (
    <Fragment>
      <Header title="Buscador de Noticias"/>

      <div className="container white">
        <Form 
          setCategory={setCategory}
        />
        <NewsList news={news}/>
      </div>
    </Fragment>
  );
}

export default App;
