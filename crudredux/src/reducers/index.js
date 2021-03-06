import {combineReducers} from 'redux';
import productosReducer from './productosReducer';
import alertaReducer from './alertaReducer';

// Aqui pueden ir todos los reducers (los reducers son objetos, llamese, productos, usuarios, artefactos, etc...)
export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
});