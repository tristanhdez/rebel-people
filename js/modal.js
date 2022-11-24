const contenedorModal = document.getElementsByClassName('modal-container')[0]
const contenedorModalForm = document.getElementsByClassName('form-container')[0]
const botonAbrir = document.getElementById('cart-button')
const botonCerrar = document.getElementById('closeCart')
const botonCerrarForm = document.getElementById('closeForm')
const botonComprar = document.getElementById('buyProducts')
const modalCarrito = document.getElementsByClassName('modal-cart')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})


botonComprar.addEventListener('click', ()=>{
  contenedorModal.classList.toggle('modal-active')
  contenedorModalForm.classList.toggle('modal-form-active')
})

botonCerrarForm.addEventListener('click', ()=>{
  contenedorModalForm.classList.toggle('modal-form-active')
})



modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() //cuando clickeo sobre el modal se finaliza la propagacion del click a los elementos
    //padre
})
