import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Form = ({setCategory}) => {

    //#region CUSTOM HOOKS
    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ];

    // Utilizar Custom Hooks
    const [category, SelectNoticias] = useSelect('general', OPTIONS);
    //#endregion

    //#region SUBMIT
    const searchNews = e => {
        e.preventDefault();

        setCategory(category);
    }
    //#endregion
    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={searchNews}>
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <button 
                            type="submit" 
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                        >Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Form.propTypes = {
    setCategory: PropTypes.func.isRequired
}
 
export default Form;