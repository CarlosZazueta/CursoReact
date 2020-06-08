import React from 'react';
import PropTypes from 'prop-types';

const Error = ({text}) => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="alert alert-danger text-center" role="alert">
                {text}
            </div>
        </div>
    );
}
 
Error.propTypes = {
    text: PropTypes.string.isRequired
}

export default Error;