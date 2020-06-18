import React, { useState } from 'react';

const Formulario = ({setBusquedaLetra}) => {
    //#region STATES
    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [error, setError] = useState(false);
    //#endregion

    //#region INPUTS
    const {artista, cancion} = busqueda;

    const actualizarState = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }
    //#endregion

    //#region SUBMIT
    const buscarInformacion = e => {
        e.preventDefault();

        if (artista.trim() === '' || cancion.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        setBusquedaLetra(busqueda);
    }
    //#endregion

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form 
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={buscarInformacion}
                        >
                        <fieldset>

                            <legend className="text-center">Buscador Letras Canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="artista">Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre del artista o grupo"
                                            onChange={actualizarState}
                                            value={artista}
                                            />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="cancion">Canción</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre canción"
                                            onChange={actualizarState}
                                            value={cancion}
                                            />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                                >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>

            {error ? <p className="alert alert-primary text-center p-2 rounded-0">Todos los campos son obligatorios</p> : null}
        </div>
    );
}
 
export default Formulario;