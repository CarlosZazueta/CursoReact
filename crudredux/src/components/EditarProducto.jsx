import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {editarProductoAction} from '../actions/productosActions';
import Swal from 'sweetalert2';

const EditarProducto = () => {
    
    //Producto a editar
    const productoEditar = useSelector((state) => state.productos.productoEditar);

    //Dispatch
    const dispatch = useDispatch();

    // history
    const history = useHistory();
    
    // state de producto
    let [nuevoProducto, setNuevoProducto] = useState({
        nombre: '', 
        precio: 0,
        id: 0
    });
    
    //Llenar producto automaticamente con un useEffect
    useEffect(() => {
        if (productoEditar) {
            setNuevoProducto({nombre, precio, id});
        } else {
            history.push('/');
        }
    }, [productoEditar]);
    
    // Evita un error al hacer destructuring a productoEditar
    if (!productoEditar) return null;
    
    const onChangeFormulario = (e) => {
        setNuevoProducto({
            ...nuevoProducto,
            [e.target.name]: e.target.value
        })
    }
    
    const {nombre, precio, id} = productoEditar;

    //Submit
    const submitEditarProducto = (e) => {
        e.preventDefault();

        if (nuevoProducto !== null) {
            if(nuevoProducto.nombre.trim() === ''){
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'No se ha indicado el nombre del producto!'
                });
                return;
            } else if ( nuevoProducto.precio <= 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'No puedes dejar el precio en 0!'
                });
                return;
            } else {
                dispatch(editarProductoAction(nuevoProducto));
                history.push('/');
            }
        } 
    }
    

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Editar Producto</h2>

                        <form onSubmit={submitEditarProducto}>
                            <div className="form-group">
                                <label htmlFor="nombreProducto">Nombre Producto</label>
                                <input 
                                    type="text" 
                                    name="nombre" 
                                    id="nombreProducto"
                                    className="form-control"
                                    placeholder="Ej. Jeans"
                                    value={nuevoProducto.nombre}
                                    onChange={onChangeFormulario}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="precioProducto">Precio</label>
                                <input 
                                    type="number" 
                                    name="precio" 
                                    id="precioProducto"
                                    className="form-control"
                                    placeholder="Ej. $100"
                                    value={nuevoProducto.precio}
                                    onChange={onChangeFormulario}/>
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font=weight-bold text-uppercase d-block w-100" >
                                Guardar cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarProducto;