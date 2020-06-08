import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => {
    return ( 
        <div>
            <div className="jumbotron text-center bg-info mb-0 rounded-0">
                <h1 href="#!" className="display-4 text-light"> {title} </h1>
            </div>
        </div>
    );
}

Header.propType = {
    title: PropTypes.string.isRequired
}
 
export default Header;