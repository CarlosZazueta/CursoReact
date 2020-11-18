//#region IMPORTS
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'
import clienteAxios from '../config/axios'
//#endregion

//#region CREAR NUEVOS PRODUCTOS 
export function nuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarNuevoProducto());

        try {
            //#region INSERTAR EN LA API
            await clienteAxios.post('/productos', producto);
            dispatch(agregarProductoExito(producto));
            //#endregion
        } catch (error) {
            console.log(error);
            dispatch(agregarProductoError(true));
        }
    }
}
//#endregion

//#region AGREGAR NUEVO PRODUCTO 
const agregarNuevoProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});
//#endregion

//#region SI EL PRODUCTO SE GUARDA EN LA BD
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});
//#endregion

//#region SI HUBO UN ERROR
const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});
//#endregion