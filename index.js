let productos = []
let carrito = []

class Producto{
    constructor(id, nombre, precio, img, desc = ''){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
        this.desc = desc
    }
    desplegarProductos(){
        const card = `
            <div class="card">
                <p>${this.nombre}</p>
                <div>
                    <img class='imagenProducto' src=${this.img} alt="foto del producto"/>
                </div>
                <div>
                    <p>$${this.precio}</p>
                </div>
                <div class="btn-container">
                    <button id=${this.id} class='btnAgregar'>AÑADIR AL CARRITO</button>
                </div>
            </div>
        `
        const container = document.getElementById('container')
        container.innerHTML += card
    }
    agregarEvento(){
        const btnAgregar = document.getElementById(this.id)
        const productoEncontrado = productos.find(product => product.id == this.id)
        btnAgregar.addEventListener('click', () => agregarAlCarrito(productoEncontrado))
    }
}

let prod1 = new Producto('001', 'Jordan Air Retro 11 Low ', 71000, './images/524979-150-auto.jfif')
let prod2 = new Producto('002', 'Jordan Air XXXV', 32300, './images/588541-150-auto.jfif')
let prod3 = new Producto('003', 'Jordan Air 1 Mid', 47500, './images/424881-150-auto.jfif')
let prod4 = new Producto('004', 'Nike Air Force 1 GTX', 38400, './images/417890-150-auto.jfif')
let prod5 = new Producto('005', 'Adidas Originals MD Black', 42000, './images/461204-150-auto.jfif')
let prod6 = new Producto('006', 'Adidas Originals MD Grey', 42000, './images/574599-150-auto.jfif')
let prod7 = new Producto('007', 'Adidas Originals MD Grey-Black', 42000, './images/607179-150-auto.jfif')
let prod8 = new Producto('008', 'Adidas Originals Multix', 24000, './images/437270-150-auto.jfif')

productos.push(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8)

productos.forEach(e => {
    e.desplegarProductos()
}) 
productos.forEach(e => {
    e.agregarEvento()
})

function agregarAlCarrito(producto) {

    let enCarrito = carrito.find(prod => prod.id == producto.id)
    
    if(!enCarrito){
        carrito.push({...producto, cantidad: 1})
    } else {
        let carritoFiltrado = carrito.filter(prod => prod.id != producto.id)
        carrito = [
            ...carritoFiltrado, 
            { ...enCarrito, cantidad: enCarrito.cantidad + 1}
        ]
    }

    contador.innerHTML =  carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    
}
const contador = document.getElementById('contadorCarrito')
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)