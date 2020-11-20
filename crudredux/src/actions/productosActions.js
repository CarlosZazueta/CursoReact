//#region IMPORTS
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGAR_PRODUCTOS_EXITO,
    DESCARGAR_PRODUCTOS_ERROR
} from '../types'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2';
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

            //#region ALERTA
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )
            //#endregion
        } catch (error) {
            console.log(error);
            dispatch(agregarProductoError(true));
            //#region ALERTA
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: error
            });
            //#endregion
        }
    }
}
//#endregion

//#region DESCARGAR LOS PRODUCTOS
export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos())
    }
} 
//#endregion
//#region FUNCIONES

//#region  NUEVOS PRODUCTOS
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
//#endregion

//#region DESCARGAR PRODUCTOS
const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})
//#endregion
//#endregion