let producto = parseInt[
    prompt["Elegí los productos que quieras agregar al carro de compras"]
]

class productos {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;

    }
}

const prod1 = new productos("televisor", 120000, 4)
const prod2 = new productos("heladera", 18700, 7)
const prod3 = new productos("ventilador", 14000, 15)
const prod4 = new productos("microondas", 5000, 8)

console.log(prod1, prod2, prod3, prod4)

let productosSeleccionar = prompt("Ingresa que producto seleccionas: televisor, heladrera, ventilador, microondas")
let infoProd
let eligioProducto = false

while (!eligioProducto) {
    if (productosSeleccionar === prod1.nombre) {
        eligioProducto = true
        infoProd = prod1

    } else if (productosSeleccionar === prod2.nombre) {
        eligioProducto = true
        infoProd = prod2

    } else if (productosSeleccionar === prod3.nombre) {
        eligioProducto = true
        infoProd = prod3

    } else if (productosSeleccionar === prod4.nombre) {
        eligioProducto = true
        infoProd = prod4

    }
    else {
        productosSeleccionar = prompt("Ingresa que producto seleccionas: televisor, heladrera, ventilador, microondas")
    }
}

console.log("producto seleccionado: " + productosSeleccionar)
console.log(infoProd)

let cantiprod = prompt("Ingresa la cantidad de " + productosSeleccionar + " que quieras adquirir")


if (cantiprod <= prod1.stock) {
    alert("Seleccionaste " + cantiprod + " " + productosSeleccionar + "/es")

    if (cantiprod >= 3){
        alert ("El precio final con 20% de descuento es de $" + (cantiprod * prod1.precio)*0.8) 
    }

} else if (cantiprod <= prod2.stock) {
    alert("Seleccionaste " + cantiprod  + " " + productosSeleccionar)
    
    if (cantiprod >= 3){
        alert ("El precio final con 20% de descuento es de $" + (cantiprod * prod1.precio)*0.8) 
    }

} else if (cantiprod <= prod3.stock) {
    alert("Seleccionaste " + cantiprod  + " " + productosSeleccionar)

    if (cantiprod >= 3){
        alert ("El precio final con 20% de descuento es de $" + (cantiprod * prod1.precio)*0.8) 
    }

} else if (cantiprod <= prod4.stock) {
    alert("Seleccionaste " + cantiprod + " " + productosSeleccionar)

    if (cantiprod >= 3){
        alert ("El precio final con 20% de descuento es de $" + (cantiprod * prod1.precio)*0.8) 
    }

}
else {
    alert("No contamos con stock disponible")
}



