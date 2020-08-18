import React, {createContext, useEffect, useState} from 'react';
import Axios from 'axios';

//#region CONTEXT
export const ModalContext = createContext();
//#endregion

//#region MODAL PROVIDER
const ModalProvider = (props) => {
    // State del provider
    const [id_receta, setIdReceta] = useState(null);
    const [detalles_receta, setDetallesReceta] = useState({});

    // useEffect
    useEffect(() => {
        obtenerDetallesReceta();
    }, [id_receta])

    //#region LLAMADO API TheCocktailDb
    const obtenerDetallesReceta = async () => {
        if (!id_receta) return;

        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id_receta}`;
        const resultado = await Axios.get(url).catch(error => {
            alert('Oops! ha ocurrido un error');
        });

        setDetallesReceta(resultado.data.drinks[0]);
    }
    //#endregion

    return (
        <ModalContext.Provider
            value={{
                detalles_receta,
                setIdReceta,
                setDetallesReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;
//#endregion

