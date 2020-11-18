import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'

// Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false
}

// Se exporta el reducer como una funcion, pasando un state que será el initail state por defecto si no se le asigna uno
// Tambien, pasamos un action para identificar las acciones que realizaremos con los productos
// el reducer siempre sera un switch(action.type) y default: return sate;
export default function(state = initialState, action) {
    switch(action.type) {
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
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}