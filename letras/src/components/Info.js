import React from 'react';

const Info = ({informacion}) => {

    if (Object.keys(informacion).length === 0) return null;

    const {
        strArtistThumb, 
        strGenre, 
        strBiographyES, 
        strBiographyEN,
        intFormedYear,
        intBornYear,
        strCountry,
        strFacebook,
        strTwitter,
        strLastFMChart
    } = informacion;

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información Artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" />
                <p className="card-text">Género: {strGenre} </p>

                {intBornYear === null ? (
                    <p className="card-text">Se formó en: {intFormedYear} </p>
                ) : (
                    <p className="card-text">Nació en: {intBornYear} </p>
                )}

                <p className="card-text">Lugar: {strCountry} </p>

                <p className="card-text">Género: {strGenre} </p>

                <h2 className="card-text">Biografía: </h2>
                <p className="card-text">
                    {strBiographyES === null ? strBiographyEN : strBiographyES} 
                </p>
                <p className="card-text text-center">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}
 
export default Info;