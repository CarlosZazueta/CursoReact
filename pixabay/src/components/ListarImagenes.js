import React from 'react';
import Imagen from './Imagen';

const ListarImagenes = ({imagenes}) => {
    return (
        <div className="mb-5 col-12 p-5 row">
            {imagenes.map(imagen => (
                <Imagen 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
    );
}
 
export default ListarImagenes;