const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100, imagen: 'https://www.cursos.artesdeolga.com/wp-content/uploads/2015/12/curso-bordado.jpg'},
    { id: 2, nombre: 'Producto 2', precio: 200, imagen: 'https://almaceneslacostura.com/wp-content/uploads/2020/08/bordar-flores-con-aguja-magica-la-costura-e1597992950176.jpg' },
    { id: 3, nombre: 'Producto 3', precio: 300, imagen: 'https://i.pinimg.com/236x/5c/99/b0/5c99b0b9f48a7ca8968408afefcf499a.jpg' }
];


let carrito = [];


function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}


function actualizarCarrito() {
    const carritoList = document.getElementById('carrito-list');
    const totalElement = document.getElementById('total');
    
  
    carritoList.innerHTML = '';

    
    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        carritoList.appendChild(li);
    });

    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    totalElement.textContent = `$${total}`;
}


function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}


document.querySelectorAll('.agregar-btn').forEach(button => {
    button.addEventListener('click', () => {
        const productoId = parseInt(button.getAttribute('data-id'));
        agregarAlCarrito(productoId);
    });
});

document.getElementById('vaciarCarrito').addEventListener('click', vaciarCarrito);