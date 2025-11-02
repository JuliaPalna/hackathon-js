import { Module } from '../core/module';
import { corners } from '../utils/corners';

export class MessageModule extends Module {
	constructor(type, text) {
		super(type, text);
	}

	trigger() {
		const message = prompt('Введите сообщение');

		const container = document.createElement('div');
		container.className = 'div-message';
		container.textContent = message;
		container.style.position = 'fixed';

		const corner = corners[Math.floor(Math.random() * corners.length)];
		Object.entries(corner).forEach(([key, value]) => {
			container.style[key] = value;
		});

		document.body.append(container);

		setTimeout(() => container.remove(), 2000);
	}
}
