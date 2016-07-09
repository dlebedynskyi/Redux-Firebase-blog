import sanitizer from 'sanitizer';
/**
 * Helper function to sanitize incomming html and make result as react dangerously inner html
 * @param  html -  html string to check
 * @returns {__html: } object
 */
export default html => ({__html: sanitizer.sanitize(html)});
