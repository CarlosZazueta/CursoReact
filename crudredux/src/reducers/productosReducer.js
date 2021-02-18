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
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoEliminar: null,
    productoEditar: null
}

// Se exporta el reducer como una funcion, pasando un state que será el initail state por defecto si no se le asigna uno
// Tambien, pasamos un action para identificar las acciones que realizaremos con los productos
// el reducer siempre sera un switch(action.type) y default: return sate;
export default function(state = initialState, action) {
    switch(action.type) {
        case COMENZAR_EDITAR_PRODUCTO:
        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }
        case EDITAR_PRODUCTO_ERROR:
        case ELIMINAR_PRODUCTO_ERROR:
        case DESCARGAR_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGAR_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                productos: action.payload,
                error: null
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoEliminar: action.payload
            }
        case ELIMINAR_PRODUCTO_EXITO:
            return {
                ...state, 
                productos: state.productos.filter(producto => producto.id !== state.productoEliminar),
                productoEliminar: null
            }
        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                productoEditar: action.payload
            }
        case EDITAR_PRODUCTO_EXITO:
            return {
                ...state,
                productoEditar: null,
                productos: state.productos.map(producto => producto.id === action.payload.id ? producto = action.payload : producto)
            }
        default:
            return state;
    }
}