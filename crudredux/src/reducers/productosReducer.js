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
        default:
            return state;
    }
}