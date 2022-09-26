const nombreFormulario = document.getElementById('nombre')
const apellidoFormulario = document.getElementById('apellido')
const emailFormulario = document.getElementById('email')
const telefonoFormulario = document.getElementById('telefono')
const botonEnviar = document.getElementById('enviar')

let datos = {
    nombre: nombreFormulario,
    apellido: apellidoFormulario,
    email: emailFormulario,
    telefono: telefonoFormulario,
}
botonEnviar.onclick = confirmaDatos
function confirmaDatos(e) {
    e.preventDefault()
    const {nombre,apellido,email} = datos
    Swal.fire("Gracias por tu compra!", `Enviaremos el pedido a nombre de: ${nombre.value} ${apellido.value} y te informaremos al email ${email.value} cuando esté por llegar tu pedido.`)
}