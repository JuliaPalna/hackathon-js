import './styles.css';
import { MODULE_LIST } from './variables/variables';
import { CalendarModule } from './modules/calendar.module';
console.log('start');

const menu = document.querySelector('.menu');

MODULE_LIST.forEach((moduleItem) => {
	const { type, text } = moduleItem;
	menu.innerHTML += `<li class="menu-item" data-type="${type}">${text}</li>`;
});

const calendarModule = new CalendarModule('type', 'text');
calendarModule.trigger();
