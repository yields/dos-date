
/**
 * Convert the given `date` to dos date.
 *
 * @param {Date} date
 * @return {Number}
 * @api private
 */

module.exports = function(date){
  var date = date || new Date;
  return (((((date.getFullYear() - 1980) << 4)
    | (date.getMonth() + 1)) << 5)
    | date.getDate());
};