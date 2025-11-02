import { MODULE_LIST } from './variables/variables';
import { ContextMenu } from './menu';
import { MessageModule } from './modules/message.module';
import { CalendarModule } from './modules/calendar.module';
import { TimerModule } from './modules/timer.modules';
import { ClicksModule } from './modules/clicks.module';
import './styles.css';

const contextMenu = new ContextMenu('.menu');

MODULE_LIST.forEach((moduleItem) => {
	const { type, text } = moduleItem;

	let newModule = null;

	switch (type) {
		case 'click':
			newModule = new ClicksModule(type, text);
			break;

		case 'timer':
			newModule = new TimerModule(type, text);
			break;

		case 'calendat':
			newModule = new CalendarModule(type, text);
			break;

		case 'message':
			newModule = new MessageModule(type, text);
			break;
	}

	contextMenu.add(newModule);
});

document.addEventListener('contextmenu', addContextMenu);

function addContextMenu(event) {
	event.preventDefault();

	const x = event.clientX;
	const y = event.clientY;

	contextMenu.open({ x, y });

	contextMenu.el.addEventListener('click', openModule);

	function openModule(event) {
		const itemContextMenu = event.target.closest('li');
		if (!itemContextMenu) {
			return;
		}

		const typeModule = itemContextMenu.dataset.type;
		const moduleFind = contextMenu.modules.find((item) => {
			return item.type === typeModule;
		});

		if (moduleFind) {
			moduleFind.trigger();
		}

		contextMenu.close();
		contextMenu.el.removeEventListener('click', openModule);
	}
}
