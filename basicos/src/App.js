import React, { Fragment, useState } from 'react';
import Header from './components/Header.jsx';
import Producto from './components/Producto.jsx';
import Carrito from './components/Carrito.jsx';
import Footer from './components/Footer.js';

function App() {

  // Crear listado de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'camisa VueJS',   precio: 40 },
    { id: 3, nombre: 'camisa Angular', precio: 30 },
    { id: 4, nombre: 'camisa Redux',   precio: 20 }
  ]);

  // State para un carrito de compras
  const [ carrito, agregarProducto ] = useState([]);

  // Obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header  titulo = 'Tienda Virtual' />

      <h2>Lista de productos</h2>

      {productos.map(producto =>  (
        <Producto
          key = {producto.id}
          producto = {producto}
          productos = {productos}
          carrito = {carrito}
          agregarProducto = {agregarProducto} 
        />
      ))}

      <Carrito 
        carrito = {carrito}
        agregarProducto = {agregarProducto} 
      />

      <Footer  fecha = {fecha} />
    </Fragment>
  );
}

export default App;
