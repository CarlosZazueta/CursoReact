//#region IMPORTS
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//#region ACTIONS DE REDUX
import {nuevoProductoAction} from '../actions/productosActions';
//#endregion
//#endregion

const NuevoProducto = (props) => {
    //#region STATES DEL COMPONENTE
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);
    //#endregion

    //#region USE DISPATCH
    // utilizar dispatch te regresa una funcion
    const dispatch = useDispatch();
    //#endregion

    //#region NUEVO PRODCUTO
    // manda a llamar el action de productosAction
    const agregarNuevoProducto = (producto) => dispatch(nuevoProductoAction(producto))
    //#endregion

    //#region SUBMIT NUEVO PRODUCTO
    const submitNuevoProducto = e => {
        e.preventDefault();
        
        //#region VALIDAR FORMULARIO
        if(nombre.trim() === '' || precio <= 0) {
            return;
        }
        //#endregion
        
        //#region MANEJO DE ERRORES
        //#endregion

        //#region CREAR NUEVO PRODUCTO
        agregarNuevoProducto({
            nombre,
            precio
        });
        //#endregion
    }   
    //#endregion 

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Agregar Nuevo Producto</h2>

                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label htmlFor="nombreProducto">Nombre Producto</label>
                                <input 
                                    type="text" 
                                    name="nombre" 
                                    id="nombreProducto"
                                    className="form-control"
                                    placeholder="Ej. Jeans"
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="precioProducto">Precio</label>
                                <input 
                                    type="number" 
                                    name="precio" 
                                    id="precioProducto"
                                    className="form-control"
                                    placeholder="Ej. $100"
                                    value={precio}
                                    onChange={e => setPrecio(Number(e.target.value))}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font=weight-bold text-uppercase d-block w-100">
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;