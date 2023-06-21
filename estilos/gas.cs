/* Estilos generales */

h1, h2, h3 {
  margin-top: 0;
}

/* Estilos para los productos */
.producto {
      margin-bottom: 20px;
      width: 14em;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 1em;
      align-items: center;
    }

.producto img {
  width: 200px;
  height: auto;
}

.producto button {
  margin-top: 10px;
}

/* Estilos para el carrito */
.carrito-container {
  position: relative;
}

.carrito {
  display: none;
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100%;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  transition: right 0.3s ease;
}

.carrito.visible {
  right: 0;
}

.producto-carrito {
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.producto-carrito:last-child {
  border-bottom: none;
}

/* Estilos para el botón de mostrar/ocultar carrito */
#carrito-toggle {
  margin-top: 10px;
}
