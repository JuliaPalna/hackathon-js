import moment from 'moment';

export function getFirstDayOfMonth(initialDate) {
	return moment(initialDate).startOf('month');
}

export function getNumberOfDaysOfMonth(initialDate) {
	return +moment(initialDate).endOf('month').format('DD');
}

export function getDayOfWeek(initialDate) {
	return moment(initialDate).day();
}

export function getNumberOfWeeks(
	numberOfDaysOfMonth,
	dayWeekOfFirstDayOfMonth,
) {
	return Math.ceil((numberOfDaysOfMonth + dayWeekOfFirstDayOfMonth) / 7);
}

export function getFormatDateMMYYY(initialDate) {
	return moment(initialDate).format('MMMM YYYY');
}
