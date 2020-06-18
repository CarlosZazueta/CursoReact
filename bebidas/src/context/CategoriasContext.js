import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

// Crear context
//#region CONTEXT
export const CategoriasContext = createContext();
//#endregion

// Provider es donde se encuentran las funciones y state
//#region PROVIDER
const CategoriasProvider = (props) => {
    // Crear el State del context
    const [categorias, setCategorias] = useState([]);

    // Llamado a la Api TheCocktailDB
    //#region OBTENER CATEGORIAS
    const obtenerCategorias = async () => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        const categorias = await Axios.get(url).catch(error => {
            alert('No se pudo realizar la petición al servidor');
        });
        
        setCategorias(categorias.data.drinks);
    }
    //#endregion

    useEffect(() => {
        obtenerCategorias();
    }, [])

    return(
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
//#endregion

export default CategoriasProvider;