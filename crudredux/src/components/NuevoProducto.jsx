//#region IMPORTS
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//#region ACTIONS DE REDUX
import {nuevoProductoAction} from '../actions/productosActions';
import {mostrarAlertaAction, ocultarAlertaAction} from '../actions/alertaActions';
//#endregion
//#endregion

const NuevoProducto = ({history}) => {
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
    const agregarNuevoProducto = (producto) => dispatch(nuevoProductoAction(producto));
    //#endregion

    //#region STATE DEL STORE
    //Accediendo al state del store
    const cargando = useSelector((state) => state.productos.loading);
    const alerta = useSelector((state) => state.alerta.alerta);
    //console.log(cargando);
    //#endregion

    //#region SUBMIT NUEVO PRODUCTO
    const submitNuevoProducto = e => {
        e.preventDefault();
        
        //#region VALIDAR FORMULARIO
        if(nombre.trim() === '' || precio <= 0) {
            const alerta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch(mostrarAlertaAction(alerta));
            return;
        }
        //#endregion
        
        //#region SI NO HAY ERRORES
        dispatch(ocultarAlertaAction());
        //#endregion

        //#region CREAR NUEVO PRODUCTO
        agregarNuevoProducto({
            nombre,
            precio
        });
        //#endregion

        //#region REDIRECCIONAR
        history.push('/');
        //#endregion
    }   
    //#endregion 

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Agregar Nuevo Producto</h2>

                        {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}

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

                        {cargando ? <p>Cargando...</p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;