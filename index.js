

const menuContainer= document.getElementById('menu-container');
import {menuArray} from './data.js';
console.log(menuArray)


const menuData= menuArray.map(menu => {
  return `
  <div class="menuOuter">
  <div class="menuitems" data-id="${menu.id}">
  
  <div class="emoji"> ${menu.emoji} </div>
  <div class="menudetails">
    <h1 class="menuname headerfont">${menu.name}</h1>
    <h2 class="menuingredients headerfont">${menu.ingredients}</h2>
    <h3 class= "menuprice headerfont">${menu.price}</h3>
    </div>
    <div class="symbolsection" id="symbolsection"> <i class="fa-solid fa-plus symbol"></i></div>
    </div>
    </div> `}).join('')

menuContainer.innerHTML = menuData;

const cart = [];
const currentCart = document.getElementById('cart-items')
const symbolButtons = document.querySelectorAll('.symbolsection')
const totalPrice = document.getElementById ('totalprice')

symbolButtons.forEach(button => {
    button.addEventListener('click',() => {
      const menuItem = button.closest('.menuitems');
      const id= Number(menuItem.dataset.id);

      const clickedItem = menuArray.find( item => item.id === id);

      addToCart(clickedItem);
    })
})

function addToCart(item) {
  const existing = cart.find(i => i.id === item.id);
  existing? existing.quantity++ : cart.push({ ... item, quantity : 1});
  renderCart();
} 



function renderCart() {
  currentCart.innerHTML = ''; // clear
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price*item.quantity;
    total+=itemTotal;

   currentCart.innerHTML += `
      <div class="cartcontent">
        <p>${item.name} x${item.quantity} 
          <span class="remove-button" data-id="${item.id}" style="cursor: pointer; color: red;">remove</span>
        </p> 
        <p>$${itemTotal}</p>
      </div>
    `;
  });

    totalPrice.innerHTML = `$${total}`;
  }



currentCart.addEventListener('click', function (e) {
  if (e.target.classList.contains('remove-button')) {
    const idToRemove = Number(e.target.dataset.id);
    removeFromCart(idToRemove);
  }
});

function removeFromCart(id) {
  const index = cart.findIndex(item => item.id === id);

  if (index !== -1) {
    cart.splice(index, 1); // Remove the item from the array
    renderCart(); // Re-render the cart
  }
}


