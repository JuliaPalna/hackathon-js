import { random } from './random';

export function getRandomDots(dotsNumber) {
	const dotsArray = [];

	for (let i = 0; i < dotsNumber; i++) {
		const dot = { x: random(0, 300), y: random(0, 300) };
		dotsArray.push(dot);
	}
	return dotsArray;
}
