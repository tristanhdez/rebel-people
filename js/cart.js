"use strict";
const productsContainer = document.getElementById('products-container');
const cartContainer = document.getElementById('cart-container');
const cartCounter = document.getElementById('cartCounter');
const quantity = document.getElementById('cantidad');
const totalPrice = document.getElementById('totalPrice');
const data = { };
let cart = [];


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('cart')){
      cart = JSON.parse(localStorage.getItem('cart'));
      updateCart();
    }
})


productStock.forEach((product) => {
    const div = document.createElement('div');
    div.classList.add('product-box');
    div.innerHTML = `
    <img src=${product.img} alt="${product.name}" class="product-img">
    <h2 class="product-title">${product.name}</h2>
    <p class="product-description">${product.desc}</p>
    <span class="product-price">$${product.precio}</span>
    <div class="stars">
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
  </div>
    <i class="bx bx-shopping-bag add-cart" id="agregar${product.id}" class="boton-agregar"></i></button>
    `;
    productsContainer.appendChild(div);

    const boton = document.getElementById(`agregar${product.id}`);

    boton.addEventListener('click', () => {
        addToCart(product.id);
    })
});


const addToCart = (prodId) => {

    const exist = cart.some (prod => prod.id === prodId);
    if (exist){
        const prod = cart.map (prod => {
            if (prod.id === prodId){
                prod.quantity++;
            }
        })
    } else {
        const item = productStock.find((prod) => prod.id === prodId);
        cart.push(item);
    }

    updateCart();
};


const deleteFromCart = (prodId) => {
    const item = cart.find((prod) => prod.id === prodId);

    const indice = cart.indexOf(item);

    cart.splice(indice, 1);
    localStorage.removeItem('cart', JSON.stringify(cart));
    updateCart();
}


const updateCart = () => {
    cartContainer.innerHTML = "";

    cart.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('cart-box');
        div.innerHTML = `
        <img src="${prod.img}" alt="${prod.name}" class="cart-img">
        <div class="detail-box">
        <h3 class="cart-product-title">${prod.name}</h3>
        <div class="price">${prod.precio}</div>
        <p>cantidad: <span id="cantidad">${prod.quantity}</span></p>
        <button onclick="deleteFromCart(${prod.id})" class="delete-btn"><i class="bx bx-trash-alt"></i></button>
        </div>`;
        cartContainer.appendChild(div);

        localStorage.setItem('cart', JSON.stringify(cart));

    });
    cartCounter.innerText = cart.length;
    totalPrice.innerText = cart.reduce((acc, prod) => acc + prod.quantity * prod.precio, 0);

};


function handleInput(e){
    data[e.name] = e.value;
}


function submitData(){
  if(cart.length==0){
    alert("Carro Vacío");
  }else{
    createPDF(data.fullname,data.email,data.street,
      data.street1,data.street2, data.col,data.cp,
        data.country,data.state,data.phone);
  }
}
