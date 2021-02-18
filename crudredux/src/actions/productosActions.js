//#region IMPORTS
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGAR_PRODUCTOS_EXITO,
    DESCARGAR_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    ELIMINAR_PRODUCTO_EXITO,
    ELIMINAR_PRODUCTO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDITAR_PRODUCTO,
    EDITAR_PRODUCTO_EXITO,
    EDITAR_PRODUCTO_ERROR
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
        dispatch(descargarProductos());
        
        try {
            const res = await clienteAxios.get('/productos');
            dispatch(descargarProductosExito(res.data));
        } catch (error) {
            dispatch(descargarProductosError(true));
        }
    }
} 
//#endregion

//#region DESCARGAR LOS PRODUCTOS
export function eliminarProductoAction(idProducto) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(idProducto));
        console.log(idProducto);

        try {
            await clienteAxios.delete(`/productos/${idProducto}`);
            dispatch(eliminarProductoExito());

            Swal.fire(
                'Eliminado!',
                'Producto eliminado con exito!.',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(eliminarProductoError(true));
        }
    }
} 
//#endregion

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
});
const descargarProductosExito = (productos) => ({
    type: DESCARGAR_PRODUCTOS_EXITO,
    payload: productos
});
const descargarProductosError = (estado) => ({
    type: DESCARGAR_PRODUCTOS_ERROR,
    payload: estado
});

//#endregion

//#region ELIMINAR PRODUCTOS
const obtenerProductoEliminar = (idProducto) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: idProducto
});

const eliminarProductoExito = () => ({
    type: ELIMINAR_PRODUCTO_EXITO
});

const eliminarProductoError = (estado) => ({
    type: ELIMINAR_PRODUCTO_ERROR,
    payload: estado
});
//#endregion


//#region OBTENER PRODUCTO ACTION
export function obtenerProductoEditarAction(producto) {
    return async (dispatch) => {
        dispatch(obtenerProductoEditar(producto));
    }
}
//#endregion

//#region OBTENER EDITAR PRODCUTOS
const obtenerProductoEditar = (producto) => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
});
//#endregion

//#region EDITAR PRODUCTO ACTION
export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch(editarProducto());

        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);
            dispatch(editarProductoExito(producto));

            Swal.fire({
                icon: 'success',
                title: 'Exito!',
                text: 'Producto editado correctamente'
            });
        } catch (error) {
            dispatch(editarProductoError(true));
        }
    }
}
//#endregion

//#region EDITAR PRODUCTO
const editarProducto = () => ({
    type: COMENZAR_EDITAR_PRODUCTO,
    payload: true
});

const editarProductoExito = (producto) => ({
    type: EDITAR_PRODUCTO_EXITO,
    payload: producto
});

const editarProductoError = (estado) => ({
    type: EDITAR_PRODUCTO_ERROR,
    payload: estado
});
//#endregion