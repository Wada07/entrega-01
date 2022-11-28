// clase producto

class producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}


// creamos los productos

let productos = [
    { nombre: 'televisor', precio: 120000, stock: 4 },
    { nombre: 'heladera', precio: 18700, stock: 7 },
    { nombre: 'ventilador', precio: 14000, stock: 15 },
    { nombre: 'microondas', precio: 5000, stock: 8 }
]

// buscar elementos al DOM

const divProductos = document.querySelector("#divProductos")


productos.forEach(prod => {

    divProductos.innerHTML += `
    <div class="card cardProducto"> 
    <img src="prod.jpg" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">$${prod.precio}</p>
            <button id="${prod.nombre}" class="btn btn-primary">Agregar</button>
        </div>
    </div>
`});

// carrito de compra

const carrito = []
const botonesAgregar = document.querySelectorAll(".btn-primary")

botonesAgregar.forEach(boton => {
    boton.onclick = () => {
        const producto = productos.find(prod => prod.nombre === boton.id )
        const productoCarrito = {
            nombre: producto.nombre,
            precio: producto.precio,
            stock: producto.stock,
            cantidad: 1
        }

        const indexCarrito = carrito.findIndex(prod => prod.nombre === producto.nombre)

        if (indexCarrito === -1) {
            carrito.push(productoCarrito)
        } else {
            carrito[indexCarrito].cantidad += 1
        }
        console.log(JSON.stringify(carrito))

    }

})

// finalizar compra

const botonFinalizar = document.querySelector("#finalizar")
botonFinalizar.onclick= () => {
    const totalCompra = carrito.map(prod=>prod.precio*prod.cantidad).reduce((elem1,elem2) =>elem1+elem2)
    alert("el total de la compra es " + totalCompra )
}





