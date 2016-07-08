import moment from 'moment';
// 2016-07-01T17:55:13-07:00
const FORMAT = 'YYYY-MM-DDTHH:mm:ss+-HH:mm';
const DISPLAY = 'dddd, MMMM Do YYYY, h:mm:ss a';

const toDate = (string) => moment(string, FORMAT).toDate();
const toString = (date) => moment(date).format(FORMAT);
const toDisplayString = (date) => moment(date).format(DISPLAY);

export { toDate, toString, toDisplayString };
