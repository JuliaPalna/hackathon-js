import { Module } from '../core/module';
import { getRandomColor } from '../utils/getRandomColor';
import { getRandomDots } from '../utils/getRandomDots';
import { random } from '../utils/random';

export class ShapeModule extends Module {
	constructor(type, text) {
		super(type, text);
	}

	trigger() {
		const canvas = document.createElement('canvas');
		canvas.width = 300;
		canvas.height = 300;

		const ctx = canvas.getContext('2d');

		const numberOfDots = random(3, 8);
		const dots = getRandomDots(numberOfDots);

		const centerX = canvas.width / 2;
		const centerY = canvas.height / 2;

		dots.forEach((dot) => {
			dot.angle = Math.atan2(dot.y - centerY, dot.x - centerX);
		});

		dots.sort((a, b) => a.angle - b.angle);

		ctx.beginPath();

		ctx.moveTo(dots[0].x, dots[0].y);
		for (let i = 1; i < dots.length; i++) {
			ctx.lineTo(dots[i].x, dots[i].y);
		}

		ctx.closePath();

		ctx.fillStyle = getRandomColor();
		ctx.fill();

		canvas.style.position = 'absolute';

		const screenWidth = window.innerWidth;
		const screenHeight = window.innerHeight;

		const maxX = screenWidth - canvas.width;
		const maxY = screenHeight - canvas.height;

		console.log(maxX);
		console.log(maxY);

		canvas.style.left = `${Math.floor(Math.random() * maxX)}px`;
		canvas.style.top = `${Math.floor(Math.random() * maxY)}px`;

		document.body.appendChild(canvas);

		setTimeout(() => {
			canvas.remove();
		}, 2000);
	}
}
