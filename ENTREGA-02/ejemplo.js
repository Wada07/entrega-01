// let producto = parseInt[
//     prompt["Elegí los productos que quieras agregar al carro de compras"]
// ]


class producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}


// const person = {firstName:"John", lastName:"Doe", age:46};

let productos = [
    {nombre: 'televisor', precio: 120000, stock: 4},
    {nombre: 'heladera', precio: 18700, stock: 7},
    {nombre: 'ventilador', precio: 14000, stock: 15},
    {nombre: 'microondas', precio: 5000, stock: 8}
]

// for ( let i = 0; i < productos.length; i++ ) {
//     console.log(productos[i])
// }

productos.forEach((prod) => console.log(prod))

// const prod1 = new producto("televisor", 120000, 4)
// const prod2 = new producto("heladera", 18700, 7)
// const prod3 = new producto("ventilador", 14000, 15)
// const prod4 = new producto("microondas", 5000, 8)

// console.log(prod1, prod2, prod3, prod4)

let productoSeleccionado = prompt("Ingresa que producto seleccionas: televisor, heladrera, ventilador, microondas")
let infoProd
let eligioProducto = false

while (!eligioProducto) {

    // for ( declaracion inicial de estados ; mientras que suceda esto ; hacer lo siguiente  ) {
    //      lo queh hace
    //}

    for (let i = 0; i < productos.length && eligioProducto === false; i++) {
        if ( productos[i].nombre === productoSeleccionado ) {
            eligioProducto = true;
            infoProd = productos[i];
            //break;
        }
    }

    if ( eligioProducto === false ) {
        productoSeleccionado = prompt("Producto invalido, ingresa producto seleccionas: televisor, heladrera, ventilador, microondas");
    }
        
    // if (productoSeleccionado === prod1.nombre) {
    //     eligioProducto = true
    //     infoProd = prod1

    // } else if (productoSeleccionado === prod2.nombre) {
    //     eligioProducto = true
    //     infoProd = prod2

    // } else if (productoSeleccionado === prod3.nombre) {
    //     eligioProducto = true
    //     infoProd = prod3

    // } else if (productoSeleccionado === prod4.nombre) {
    //     eligioProducto = true
    //     infoProd = prod4

    // }
    // else {
    //     productoSeleccionado = prompt("Ingresa que producto seleccionas: televisor, heladrera, ventilador, microondas")
    // }

}

console.log("producto seleccionado: " + infoProd.nombre)

let cantiprod = prompt("Ingresa la cantidad de " + infoProd.nombre + " que quieras adquirir")

if (cantiprod <= infoProd.stock) {
    alert("Seleccionaste " + cantiprod + " " + infoProd.nombre + "/es")

    if (cantiprod >= 3){
        alert("El precio final con 20% de descuento es de $" + (cantiprod * infoProd.precio) * 0.8) 
    }
    else {
        alert("El precio final es de $" + cantiprod * infoProd.precio)
    }



}
else {
    alert("No contamos con stock disponible. Solo disponemos de " + infoProd.stock + " " + infoProd.nombre + "/es" )
}



