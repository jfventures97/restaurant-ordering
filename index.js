

const menuContainer= document.getElementById('menu-container');
import {menuArray} from './data.js';
console.log(menuArray)


const menuData= menuArray.map(menu => {
  return `
  <div> </div>
  <div>
    <h1></h1>
</div>
<div> </div> `}

)
// menuContainer.innerHTML = 