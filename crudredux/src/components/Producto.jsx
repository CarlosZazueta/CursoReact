import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

//#region REDUX
import {eliminarProductoAction, obtenerProductoEditarAction} from '../actions/productosActions'
import {useDispatch} from 'react-redux';
//#endregion

function Producto({producto}) {

    const {nombre, precio, id} = producto;

    //dispatch, history
    const dispatch = useDispatch();
    const history = useHistory(); // Habilitar history para redirección

    //Eliminar
    const confirmarEliminarProducto = (idProducto) => {
        // Preguntar al usuario
        Swal.fire({
            title: 'Estas seguro de eliminar el producto?',
            text: "No podras deshacer cambios!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Pasar al action
                dispatch(eliminarProductoAction(idProducto));
            }
        })
    }

    //Función que redirige de forma programada
    const redireccionarEdicion = (producto) => {
        dispatch(obtenerProductoEditarAction(producto));
        history.push(`/productos/editar/${producto.id}`);
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones text-center">
                <button 
                    type="button" 
                    className="btn btn-primary mr mr-2"
                    onClick={() => redireccionarEdicion(producto)}>
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}>
                    Eliminar
                </button>
            </td>
        </tr>
    );
}

export default Producto;