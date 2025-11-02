import { ContextMenu } from './menu';
import './styles.css';
import { MODULE_LIST } from './variables/variables';
console.log('start');

const menu = new ContextMenu('.menu');

MODULE_LIST.forEach((moduleItem) => {
	const { type, text } = moduleItem;

	let newModule = null;
	
	switch(type) {
		case 'click': 
			newModule = new ClickModule(type, text);
			break
		case 'timer':
			newModule = new TimerModule(type, text);
			break
	}
	menu.add(newModule);
});
