function isInteger(number) {
  if (typeof number !== 'number') {
    if (typeof number !== 'string') return false;
    return number.match(/[0-9]+/g) !== null;
  }

  return Number.isInteger(number);
}

module.exports = { isInteger };
