//Se definen las variables iniciales,se le pide al usuario que ingrese su nombre y que ingrese el tipo de producto que está buscando comprar.
let totalCompra = 0
let nombreCliente = prompt("Bienvenid@! \n \nAquí podrás adquirir todos nuestros productos\n \nPor favor ingresa tu nombre.")
let productoSeleccionado = parseInt(prompt("Hola " + nombreCliente + " ¿Que quieres comprar hoy?\n\n1-Pantalones\n2-Remeras\n3-Calzado"))
let seguirComprando = true
let decision
let productos = []
let carrito = []

//Ingreso los productos y sus características a travez de objetos y haciendo push de cada uno de ellos a la variable "productos"
const pantalon1 = {
    nombre: "Pantalon largo de jean Levis",
    talle: "42",
    cantidad: 5,
    color: "gris",
    precio: 1000,
}
productos.push(pantalon1) //0
const pantalon2 = {
    nombre: "Pantalon largo vestir Billabong",
    talle: "40",
    cantidad: 4,
    color: "negro",
    precio: 1200,
}
productos.push(pantalon2) //1
const pantalon3 = {
    nombre: "Pantalon largo de jean RipCurl",
    talle: "41",
    cantidad: 5,
    color: "azul",
    precio: 1830,
}
productos.push(pantalon3) //2
const pantalon4 = {
    nombre: "Pantalon corto skate RipCurl",
    talle: "41",
    cantidad: 5,
    color: "azul",
    precio: 1500,
}
productos.push(pantalon4) //3
const remera1 = {
    nombre: 'Remera estampada Reef',
    talle: ["M", "L", "S"],
    cantidad: 15,
    color: ["blanco", "celeste", "negro"],
    precio: 1150,
}
productos.push(remera1) //4
const remera2 = {
    nombre: 'Remera lisa Reef',
    talle: ["M", "L", "S"],
    cantidad: 15,
    color: ["blanco", "rojo", "azul"],
    precio: 1350,
}
productos.push(remera2) //5
const remera3 = {
    nombre: 'Remera lisa DC',
    talle: ["M", "L", "S"],
    cantidad: 15,
    color: ["blanco", "negro"],
    precio: 1000,
}
productos.push(remera3) //6
const calzado1 = {
    nombre: 'Zapatillas Nike AirMax',
    talle: "43",
    cantidad: 7,
    color: "negro",
    precio: 24000,
}
productos.push(calzado1) //7
const calzado2 = {
    nombre: 'Zapatillas Nike Jordan Low',
    talle: "44",
    cantidad: 10,
    color: "blanco",
    precio: 35000,
}
productos.push(calzado2) //8
const calzado3 = {
    nombre: 'Zapatillas Adidas Ultraboost',
    talle: "40",
    cantidad: 5,
    color: "rojo",
    precio: 26000,
}
productos.push(calzado3) //9

console.log(productos)

//Iteración de las opciones elegidas por el usuario utilizando ciclos condicionales y agregando cada opción elegida realizando push al carrito de compra.
while (seguirComprando === true) {
    if (productoSeleccionado === 1) {
        let articulo = prompt("Estos son nuestros pantalones disponibles actualmente:\n\n1-" + pantalon1.nombre + ", $" + pantalon1.precio + "\n2-" + pantalon2.nombre + ", $" + pantalon2.precio + "\n3-" + pantalon3.nombre + ", $" + pantalon3.precio + "\n4-" + pantalon4.nombre + ", $" + pantalon4.precio + "\n\nElige cualquiera de estos productos ingresando el número correspondiente.")
        if (articulo === "1") {
            carrito.push(productos[0])
        } else if (articulo === "2") {
            carrito.push(productos[1])
        } else if (articulo === "3") {
            carrito.push(productos[2])
        } else if (articulo === "4") {
            carrito.push(productos[3])
        } else {
            productoSeleccionado = parseInt(prompt("Ingrese un numero existente: \n\n1-" + pantalon1.nombre + ", $" + pantalon1.precio + "\n2-" + pantalon2.nombre + ", $" + pantalon2.precio + "\n3-" + pantalon3.nombre + ", $" + pantalon3.precio + "\n4-" + pantalon4.nombre + ", $" + pantalon4.precio + "\n\n"))
            continue
        }
    } else if (productoSeleccionado === 2) {
        let articulo = prompt("Estas son nuestras remeras disponibles actualmente:\n\n1-" + remera1.nombre + ", $" + remera1.precio + "\n2-" + remera2.nombre + ", $" + remera2.precio + "\n3-" + remera3.nombre + ", $" + remera3.precio + "\n\nElige cualquiera de estos productos ingresando el número correspondiente.")
        if (articulo === "1") {
            carrito.push(productos[4])
        } else if (articulo === "2") {
            carrito.push(productos[5])
        } else if (articulo === "3") {
            carrito.push(productos[6])
        } else {
            productoSeleccionado = parseInt(prompt("Ingrese un numero existente: \n\n1-" + remera1.nombre + ", $" + remera1.precio + "\n2-" + remera2.nombre + ", $" + remera2.precio + "\n3-" + remera3.nombre + ", $" + remera3.precio + "\n\n"))
            continue
        }
    } else if (productoSeleccionado === 3) {
        let articulo = prompt("Este es nuestro calzado disponible actualmente:\n\n1-" + calzado1.nombre + ", $" + calzado1.precio + "\n2-" + calzado2.nombre + ", $" + calzado2.precio + "\n3-" + calzado3.nombre + ", $" + calzado3.precio + "\n\nElige cualquiera de estos productos ingresando el número correspondiente.")
        if (articulo === "1") {
            carrito.push(productos[7])
        } else if (articulo === "2") {
            carrito.push(productos[8])
        } else if (articulo === "3") {
            carrito.push(productos[9])
        } else {
            productoSeleccionado = parseInt(prompt("Ingrese un numero existente:\n\n1-" + calzado1.nombre + ", $" + calzado1.precio + "\n2-" + calzado2.nombre + ", $" + calzado2.precio + "\n3-" + calzado3.nombre + ", $" + calzado3.precio + "\n\n"))
            continue
        }
    } else {
        productoSeleccionado = parseInt(prompt("Ingresa un tipo de producto existente:\n\n1-Pantalones\n2-Remeras\n3-Calzado"))
        continue
    }

    decision = parseInt(prompt("Quieres seguir agregando productos?\n\n 1-Si \n 2-No"))
    if (decision === 1) {
        productoSeleccionado = parseInt(prompt("Ingresa el numero del producto que quieres comprar: \n\n1-Pantalones\n2-Remeras\n3-Calzado"))
    } else if (decision === 2) {
        seguirComprando = false
    }
}

console.log(carrito)
//Iteración para generar la suma de los productos en el carrito de compra, y posteriormente mostrar al usuario a travez de un alert el total de la compra.
for (let i = 0; i<carrito.length; i++) {
    totalCompra = totalCompra + carrito[i].precio
}

alert("El valor total de su compra es de: $" + totalCompra + "\n\nGracias por comprar con nosotros " + nombreCliente + " ,que disfrutes tu compra!")