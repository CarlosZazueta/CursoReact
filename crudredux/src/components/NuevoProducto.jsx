import React from 'react';

const NuevoProducto = (props) => {
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Agregar Nuevo Producto</h2>

                        <form>
                            <div className="form-group">
                                <label htmlFor="nombreProducto">Nombre Producto</label>
                                <input 
                                    type="text" 
                                    name="nombre" 
                                    id="nombreProducto"
                                    className="form-control"
                                    placeholder="Ej. Jeans"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="precioProducto">Precio</label>
                                <input 
                                    type="number" 
                                    name="precio" 
                                    id="precioProducto"
                                    className="form-control"
                                    placeholder="Ej. $100"
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font=weight-bold text-uppercase d-block w-100"
                                >Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;