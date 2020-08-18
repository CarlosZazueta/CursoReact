import React, {createContext, useState, useEffect} from 'react';
import Axios from 'axios';

//#region CONTEXT
export const RecetasContext = createContext();
//#endregion

//#region PROVIDER
const RecetasProvider = (props) => {

    //#region STATES
    const [recetas, setRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    });
    const [consultar, setConsultar] = useState(false);
    //#endregion

    // Destructuring de busqueda
    const {nombre, categoria} = busqueda; 

    //#region USE EFFECT
    useEffect(() => {
        if (consultar) {
            obtenerRecetas();
        }
    }, [busqueda]);
    //#endregion
    
    // Llamado a la api de TheCocktailDB
    //#region RECETAS API
    const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const resultado = await Axios.get(url).catch(error => {
            alert(error);
        });

        setRecetas(resultado.data.drinks);
    }
    //#endregion
    
    return(
        <RecetasContext.Provider
            value={{
                recetas,
                buscarRecetas,
                setConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}
//#endregion

export default RecetasProvider;
