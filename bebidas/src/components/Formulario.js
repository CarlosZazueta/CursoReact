import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {
    
    // Context
    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, setConsultar } = useContext(RecetasContext);

    //States
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    //#region CONTENIDO FORMULARIO
    const obtenerDatosReceta = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }
    //#endregion

    return ( 
        <form 
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                setConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend> Busca bebidas por categoría o ingrediente </legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                        required
                    >
                        <option value="">-- Selecciona la categoría --</option>
                        {
                            categorias.map(categoria => (
                                <option 
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >{categoria.strCategory}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <button
                        type="submit"
                        className="btn btn-block btn-primary"
                    >Buscar Bebidas</button>
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;