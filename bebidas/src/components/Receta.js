import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {
    // Configuracion del Modal de Material UI
    //#region FUNCIONES Y SATES DE MODAL
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    //#endregion

    // Valores del context
    const { detalles_receta, setIdReceta, setDetallesReceta } = useContext(ModalContext);

    // Muestra y formatea los ingredientes
    const mostrarIngredientes = detalles => {
        let ingredientes = [];
        for (let i = 0; i < 16; i++) {
            if (detalles[`strIngredient${i}`]) {
                ingredientes.push(
                    <li> 
                        {`${detalles[`strIngredient${i}`]} `}
                        {detalles[`strMeasure${i}`]}                     
                    </li>
                );
            } 
        }

        return ingredientes;
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header"> {receta.strDrink} </h2>
                <img className="card-img-top rounded-0" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdReceta(receta.idDrink);
                            handleOpen();
                        }}
                    >Ver Receta</button>
                </div>
                <Modal
                    open={open}
                    onClose={() => {
                        setIdReceta(null);
                        setDetallesReceta({});
                        handleClose();
                    }}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <h2> {detalles_receta.strDrink} </h2>
                        <h3>Ingredientes y Cantidades</h3>
                        <ul>
                            {mostrarIngredientes(detalles_receta)}
                        </ul>
                        <h3 className="mt-4">Instrucciones</h3>
                        <p>
                            {detalles_receta.strInstructions}
                        </p>
                        <img className="img-fluid my-4" src={detalles_receta.strDrinkThumb} />
                    </div>
                </Modal>
            </div>
        </div>
    );
}
 
export default Receta;