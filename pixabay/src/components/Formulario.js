import React, { useState }  from 'react';
import Error from './Error';

const Formulario = ({setBusqueda}) => {
    
    //#region STATE(S)
    const [termino, setTermino] = useState('');
    const [error, setError] = useState(false);
    //#endregion

    //#region BUSCAR IMAGENES
    const buscarImagenes = e => {
        e.preventDefault();

        // Validar
        if (termino.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        //Enviar a App.js
        setBusqueda(termino);
    }
    //#endregion
    return (
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imágen. Ej: Football"
                        onChange={e => setTermino(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <button 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                    >Buscar</button>
                </div>
            </div>
            {error ? <Error mensaje="Agrega un termino para buscar"/> : null}
        </form>
    );
}
 
export default Formulario;