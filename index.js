

const menuContainer= document.getElementById('menu-container');
import {menuArray} from './data.js';
console.log(menuArray)


const menuData= menuArray.map(menu => {
  return `
  <div class="menuOuter">
  <div class="menuitems">
  
  <div class="emoji"> ${menu.emoji} </div>
  <div class="menudetails">
    <h1 class="menuname headerfont">${menu.name}</h1>
    <h2 class="menuingredients headerfont">${menu.ingredients}</h2>
    <h3 class= "menuprice headerfont">${menu.price}</h3>
    </div>
    <div class="symbolsection"> <i class="fa-solid fa-plus symbol"></i></div>
    </div>
    </div> `}).join('')

menuContainer.innerHTML = menuData;