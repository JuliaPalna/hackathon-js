export function createCalendar(date, numberOfWeeks) {
	const tableHead = createTableHead();
	const table = createTableBody(numberOfWeeks);

	return `
		<div class="calendar">
			<h1 class="title calendar_title">
			${date}
			</h1>
			<table class="calendar_table table">
			${tableHead}${table}
			</table>
		</div>
	`;
}

function createTableHead() {
	let tableRow = `<tr>`;

	const week = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

	for (let i = 0; i < 7; i++) {
		tableRow += `<th class="table_cell">${week[i]}</th>`;
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

function createTableRowToOneWeek() {
	let tableRow = `<tr>`;

	for (let i = 0; i < 7; i++) {
		tableRow += `<td class="table_cell"></td>`;
	}
	tableRow += `</tr>`;

	return tableRow;
}
