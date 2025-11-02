import './styles.css';
import { MODULE_LIST } from './variables/variables';
import { MessageModule } from './modules/message.module';
import { CalendarModule } from './modules/calendar.module';
import { ShapeModule } from './modules/shape.module';

console.log('start');

const menu = document.querySelector('.menu');

MODULE_LIST.forEach((moduleItem) => {
	const { type, text } = moduleItem;
	menu.innerHTML += `<li class="menu-item" data-type="${type}">${text}</li>`;
});

const shape = new ShapeModule('type', 'text');
shape.trigger();
