import './styles.css';
import { MODULE_LIST } from './variables/variables';
console.log('start');

const menu = document.querySelector('.menu');

MODULE_LIST.forEach((moduleItem) => {
	const { type, text } = moduleItem;
	menu.innerHTML += `<li class="menu-item" data-type="${type}">${text}</li>`;
});
