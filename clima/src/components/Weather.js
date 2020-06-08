import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({result}) => {
    // Extraer los valores
    const {name, main} = result;

    if (!name) return null;

    // Grados Kelvin
    const kelvin = 273.15;

    return (
        <div className="container col-md-12">
            <div className="row justify-content-md-center"> 
                <div className="col col-lg-8 card">
                <div className="card-body text-center">
                    <h4 className="card-title pb-2">Clima de: <span className="text-info">{name}</span> </h4>
                    <h2 className="card-subtitle mb-2"> 
                        <span className="text-warning"> {parseFloat(main.temp - kelvin, 10).toFixed(2)}&#x2103; </span> 
                    </h2>
                    <p className="card-text text-muted mb-1">
                        Máxima: 
                        <span className="text-danger"> {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}&#x2103; </span> 
                    </p>
                    <p className="card-text text-muted mb-1">
                        Mínima: 
                        <span className="text-primary"> {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}&#x2103; </span> 
                    </p>
                    <h6 className="card-subtitle mb-2 mt-1 text-muted">
                        Humedad: 
                        <span className="text-body"> {main.humidity}% </span> 
                    </h6>
                    <a href="https://openweathermap.org/" rel="noopener noreferrer" target="_blank" className="card-link">Api OpenWeather</a>
                </div>
                </div>
            </div>
        </div>
    );
}

Weather.propTypes = {
    result: PropTypes.object.isRequired
}
 
export default Weather;