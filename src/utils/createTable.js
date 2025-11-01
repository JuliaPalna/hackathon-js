function createTableRowToOneWeek() {
	let tableRow = `<tr>`;

	for (let i = 0; i < 7; i++) {
		tableRow += `<td class="cell"></td>`;
	}
	tableRow += `</tr>`;

	return tableRow;
}

function createTableBody(numberWeek) {
	let bodyTable = '';

	for (let i = 0; i < numberWeek; i++) {
		const row = createTableRowToOneWeek();
		bodyTable += row;
	}

	return bodyTable;
}

export function createCalendar(date, numberOfWeeks) {
	const table = createTableBody(numberOfWeeks);

	return `<div><h1>${date}</h1><table class="table">${table}</table></div>`;
}
