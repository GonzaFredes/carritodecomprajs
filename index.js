const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const precioTotal = document.getElementById('precioTotal')

//variables del modal
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

let carrito = []

let stockProductos = []
const botonZapatillas = document.getElementById ('botonZapatillas')
const botonPantalones = document.getElementById ('botonPantalones')

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    localStorage.removeItem('carrito')
    actualizarCarrito()
})
//funcion para mostrar alerta de SwiftAlert
botonVaciar.onclick = mostrarAlert
function mostrarAlert() {
    swal("Artículos Eliminados", "Puedes seguir agregando productos al carrito", "success");
}

//fetch apuntado al archivo .json de stock de productos
botonZapatillas.onclick = async () => {
    const stock = await fetch('./zapatillas.json')
    const stockJson = await stock.json()
    await stockJson.forEach(e => {
        stockProductos.push(e);
    })//para cada producto genera un div en el HTML donde se le agregan las caracteristicas de la variable definida anteriormente
    stockJson.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
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
        contenedorProductos.appendChild(div)
        const boton = document.getElementById(`${producto.id}`)
        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
        })
        boton.onclick = mostrarAgregado //funcion que muestra alertas cada vez que se agrega un producto al carrito mediante Toastify
        function mostrarAgregado() {
            Toastify({
                text: `Agregaste un nuevo producto al carrito`,
                className: "info",
                position: "right",
                gravity: "bottom",
                style: {
                    background: "#dbdbdb",
                    color: "#050505",
                }
            }).showToast();
        }
    })
}

botonPantalones.onclick = async () => {
    const stock = await fetch('./pantalones.json')
    const stockJson = await stock.json()
    await stockJson.forEach(e => {
        stockProductos.push(e);
    })
    stockJson.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
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
        contenedorProductos.appendChild(div)
        const boton = document.getElementById(`${producto.id}`)
        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
        })
        boton.onclick = mostrarAgregado //funcion que muestra alertas cada vez que se agrega un producto al carrito mediante Toastify
        function mostrarAgregado() {
            Toastify({
                text: `Agregaste un nuevo producto al carrito`,
                className: "info",
                position: "right",
                gravity: "bottom",
                style: {
                    background: "#dbdbdb",
                    color: "#050505",
                }
            }).showToast();
        }
    })
}

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
        actualizarCarrito()
        console.log(carrito)
    }
    actualizarCarrito()
}

//variable para eliminar producto del carrito
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}
//variable con funcion creada para que se agregue al carrito cada producto con sus caracteristicas traídas del array
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
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
    let contadorTotal = 0;
    carrito.forEach(num => {
        contadorTotal = num.cantidad + contadorTotal;
        return contadorTotal;
    })

    contadorCarrito.innerText = contadorTotal
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
}
//Escuchadores de eventos para modal de carrito
botonAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) => {
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation()
})