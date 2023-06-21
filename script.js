
var productosDisponibles = [
  { id: 1, nombre: "Producto 1", precio: 10.99, imagen: "img/Leche vegana.jpg" },
  { id: 2, nombre: "Producto 2", precio: 19.99, imagen: "img/Mayonesa Vegana.jpg" },
  { id: 3, nombre: "Producto 2", precio: 19.99, imagen: "img/Queso vegano.jpg" },
  { id: 4, nombre: "Producto 2", precio: 19.99, imagen: "img/Helado VEGANO.jpg" },
  { id: 5, nombre: "Producto 2", precio: 19.99, imagen: "img/Chocolatada vegano.jpg" }
];

var carritoProductos = [];


var carritoVisible = false;


function mostrarProductos() {
  var productosHTML = "";
  
  for (var i = 0; i < productosDisponibles.length; i++) {
    var producto = productosDisponibles[i];
    productosHTML += '<div class="producto">' +
                     '<h3>' + producto.nombre + '</h3>' +
                     '<img src="' + producto.imagen + '" alt="' + producto.nombre + '">' +
                     '<p>Precio: $' + producto.precio + '</p>' +
                     '<label for="cantidad_' + producto.id + '">Cantidad:</label>' +
                     '<input type="number" id="cantidad_' + producto.id + '" min="1" value="1">' +
                     '<button onclick="agregarAlCarrito(' + producto.id + ')">Agregar al carrito</button>' +
                     '</div>';
  }
  
  document.getElementById("productos").innerHTML = productosHTML;
}


function agregarAlCarrito(productoId) {

  var productoSeleccionado = productosDisponibles.find(function(producto) {
    return producto.id === productoId;
  });
  

  var cantidadSeleccionada = parseInt(document.getElementById("cantidad_" + productoId).value);
  

  var productoEnCarrito = carritoProductos.find(function(producto) {
    return producto.id === productoId;
  });
  
  if (productoEnCarrito) {

    productoEnCarrito.cantidad += cantidadSeleccionada;
  } else {

    var productoEnCarrito = {
      id: productoSeleccionado.id,
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      cantidad: cantidadSeleccionada
    };
    
    carritoProductos.push(productoEnCarrito);
  }
  

  mostrarCarrito();
}


function mostrarCarrito() {
  var carritoHTML = "";
  var total = 0;
  
  for (var i = 0; i < carritoProductos.length; i++) {
    var producto = carritoProductos[i];
    var subtotal = producto.precio * producto.cantidad;
    total += subtotal;
    
    carritoHTML += '<div class="producto-carrito">' +
                   '<h3>' + producto.nombre + '</h3>' +
                   '<p>Precio: $' + producto.precio + '</p>' +
                   '<p>Cantidad: ' + producto.cantidad + '</p>' +
                   '<p>Subtotal: $' + subtotal + '</p>' +
                   '</div>';
  }
  
  carritoHTML += '<p>Total: $' + total + '</p>';
  
  document.getElementById("carrito").innerHTML = carritoHTML;
}

var carritoVisible = false;


function toggleCarrito() {
  carritoVisible = !carritoVisible;
  var carrito = document.getElementById("carrito");
  var toggleButton = document.getElementById("carrito-toggle");
  
  if (carritoVisible) {
    carrito.classList.add("visible");
    toggleButton.innerHTML = "Ocultar Carrito";
  } else {
    carrito.classList.remove("visible");
    toggleButton.innerHTML = "Mostrar Carrito";
  }
}


function cerrarCarrito() {
  carritoVisible = false;
  var carrito = document.getElementById("carrito");
  var toggleButton = document.getElementById("carrito-toggle");
  
  carrito.style.display = "none";
  toggleButton.innerHTML = "Mostrar Carrito";
}


mostrarProductos();
mostrarCarrito();


document.addEventListener('DOMContentLoaded', function() {
  const botonHamburguesa = document.querySelector('.hamburguesa');
  const menuDesplegable = document.querySelector('.menu-desplegable');

  botonHamburguesa.addEventListener('click', function() {
    menuDesplegable.classList.toggle('show');
  });
});

