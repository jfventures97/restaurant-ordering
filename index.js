

const menuContainer= document.getElementById('menu-container');
import {menuArray} from './data.js';
console.log(menuArray)


const menuData= menuArray.map(menu => {
  return `
  <div> ${menu.emoji} </div>
  <div>
    <h1>${menu.name}</h1>
    <h2>${menu.ingredients}</h2>
    <h3>${menu.price}</h3>
    </div>
    <div> <i class="fa-solid fa-plus"></i></div> `}).join('')
    
menuContainer.innerHTML = menuData;