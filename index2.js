const contenedorProductos = document.getElementById ('contenedor-productos')
const contenedorCarrito = document.getElementById ('carrito-contenedor')
const botonVaciar = document.getElementById ('vaciar-carrito')
const precioTotal = document.getElementById ('precioTotal')

//variables del modal
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener ('click', () => {
    carrito.length = 0
    actualizarCarrito()
})
//se definen la lista de productos mediante variable con array
let stockProductos= [
    {id:1,nombre:'Jordan Air Retro 11 Low ',precio: 71000,imagen: './images/524979-150-auto.jfif',cantidad:1},
    {id:2,nombre:'Jordan Air XXXV',precio: 32000,imagen: './images/588541-150-auto.jfif',cantidad:1},
    {id:3,nombre:'Jordan Air 1 Mid',precio: 47000,imagen: './images/424881-150-auto.jfif',cantidad:1},
    {id:4,nombre:'Nike Air Force 1 GTX',precio: 38000,imagen: './images/417890-150-auto.jfif',cantidad:1},
    {id:5,nombre:'Adidas Originals MD Black',precio: 42000,imagen: './images/461204-150-auto.jfif',cantidad:1},
    {id:6,nombre:'Adidas Originals MD Grey',precio: 42000,imagen: './images/574599-150-auto.jfif',cantidad:1},
    {id:7,nombre:'Adidas Originals MD G-B',precio: 42000,imagen: './images/607179-150-auto.jfif',cantidad:1},
    {id:8,nombre:'Adidas Originals Multix',precio: 29000,imagen: './images/437270-150-auto.jfif',cantidad:1},
]
//para cada producto genera un div en el HTML donde se le agregan las caracteristicas de la variable definida anteriormente
stockProductos.forEach ((producto) => {
    const div = document.createElement ('div')
    div.classList.add ('producto')
    div.innerHTML =`
    <div class="card">
        <p>${producto.nombre}</p>
        <div>
            <img class='imagenProducto' src=${producto.imagen} alt="foto del producto"/>
        </div>
        <div>
            <p>$${producto.precio}</p>
        </div>
        <div class="btn-container">
            <button id=${producto.id} class='btnAgregar'>AÑADIR AL CARRITO</button>
        </div>
    </div>`
    contenedorProductos.appendChild (div)
    const boton = document.getElementById(`${producto.id}`)
    boton.addEventListener ('click', () => {
        agregarAlCarrito (producto.id)
    })
})

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)

    if (existe) {
        const prod = carrito.map (prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    }else {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push (item)
    actualizarCarrito ()
    console.log (carrito)
}
actualizarCarrito ()
}                 
//variable para eliminar producto del carrito
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarrito()
}    
//variable con funcion creada para que se agregue al carrito cada producto con sus caracteristicas traídas del array
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach ((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML =`
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <img class='imagencarrito' src=${prod.imagen} alt="foto del producto"/>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fa-solid fa-trash-can"></i></button>
        `
        //Implementación de Json para guardar los items elegidos en carrito
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc,prod) => acc + prod.cantidad * prod.precio,0);
}

//Escuchadores de eventos para modal de carrito
botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation()
})