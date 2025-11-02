export function getRandomColor() {
	const rgbArr = ['r', 'g', 'b'];
	for (let i = 0; i < rgbArr.length; i++) {
		rgbArr[i] = Math.floor(Math.random() * 256);
	}
	const rndColor = `rgb(${rgbArr[0]},${rgbArr[1]},${rgbArr[2]})`;
	return rndColor;
}
