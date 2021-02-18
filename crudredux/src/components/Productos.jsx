import React, {Fragment, useEffect} from 'react';
import Producto from './Producto'; 
//#region REDUX
import {useDispatch, useSelector} from 'react-redux';
import {obtenerProductosAction} from '../actions/productosActions'
//#endregion

const Productos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        //#region CONSULTAR API
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos();
        //#endregion
        //eslint-disable-next-line
    }, []);

    // Obtener state
    const productos = useSelector((state) => state.productos.productos);
    const loading = useSelector((state) => state.productos.loading);
    const error = useSelector((state) => state.productos.error);

    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>

            {error ? <p className="font-weight-bold alert alert-danger text-center mt-4"> Hubo un error</p> : null}
            {loading ? <p className="text-center">Cargando...</p> : null}

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th className="text-center" scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length === 0 ? (
                            <tr>
                                <td>No hay productos!</td>
                            </tr>
                        ) : (
                            productos.map((producto) => (
                                <Producto 
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))
                        )
                    }
                </tbody>
            </table>
        </Fragment>
    );
};

export default Productos;