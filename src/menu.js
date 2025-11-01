import { Menu } from './core/menu';
import { Module } from './core/module';

export class ContextMenu extends Menu {
	constructor(selector) {
		super(selector);

		this.modules = [];
	}

	open({ x, y }) {
		this.el.style.left = `${x}px`;
		this.el.style.top = `${y}px`;

		this.el.classList.add('open');
	}

	close() {
		this.el.classList.remove('open');
	}

	add(module) {
		if (!(module instanceof Module)) {
			throw new Error('error module must instanceof Module');
		}

		const moduleHtml = module.toHTML();
		this.el.innerHTML += moduleHtml;

		this.modules.push(module);
	}
}
