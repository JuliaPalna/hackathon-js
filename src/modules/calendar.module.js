import { Module } from '../core/module';
import * as utilsDate from '../utils/getFormatDate';
import { createCalendar } from '../utils/createTable';

export class CalendarModule extends Module {
	trigger() {
		const dateNow = new Date();

		const formatDate = utilsDate.getFormatDateMMYYY(dateNow);
		const firstDayOfMonth = utilsDate.getFirstDayOfMonth(dateNow);
		const numberOfDaysOfMonth = utilsDate.getNumberOfDaysOfMonth(dateNow);
		const dayWeekOfFirstDayOfMonth = utilsDate.getDayOfWeek(firstDayOfMonth);
		const numberOfWeeks = utilsDate.getNumberOfWeeks(
			numberOfDaysOfMonth,
			dayWeekOfFirstDayOfMonth,
		);

		const tableCalendar = createCalendar(formatDate, numberOfWeeks);
		document.body.innerHTML += tableCalendar;

		addDatesToCalendar(numberOfDaysOfMonth, dayWeekOfFirstDayOfMonth);
	}
}

function addDatesToCalendar(numberOfDaysOfMonth, dayWeekOfFirstDayOfMonth) {
	const cellTableList = document.querySelectorAll('td');

	for (let i = 0; i < numberOfDaysOfMonth; i++) {
		const number = i + dayWeekOfFirstDayOfMonth - 1;
		cellTableList[number].textContent = i + 1;
	}
}
