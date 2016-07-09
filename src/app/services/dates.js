import moment from 'moment';
// 2016-07-01T17:55:13-07:00
const FORMAT = 'YYYY-MM-DDTHH:mm:ss+-HH:mm';
const DISPLAY = 'dddd, MMMM Do YYYY, h:mm:ss a';
/**
 * Fromat storage date to js Date
 *
 * @param string - storage format date
 * @returns js Date
 */
export const toDate = (string) => moment(string, FORMAT).toDate();
/**
 * Formats date to storage date format
 *
 * @param date
 * @returns storage formated date string
 */
export const toString = (date) => moment(date).format(FORMAT);
/**
 * Formats date to display format date.
 *
 * @param date - date to format
	* @param format - disply format. defaults to DISPLAY
 * @returns formatted date string
 */
export const toDisplayString = (date, format = DISPLAY) => moment(date).format(format);
