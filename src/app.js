import { ContextMenu } from './menu';
import './styles.css';
import { MODULE_LIST } from './variables/variables';
import { MessageModule } from './modules/message.module';
import { CalendarModule } from './modules/calendar.module';
import { ShapeModule } from './modules/shape.module';

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

const shape = new ShapeModule('type', 'text');
shape.trigger();
