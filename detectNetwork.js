// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

  var arr = cardNumber.split('');

  var twoDigitPrefix = parseInt(arr.slice(0, 2).join(''));
  var threeDigitPrefix = parseInt(arr.slice(0, 3).join(''));
  var fourDigitPrefix = parseInt(arr.slice(0, 4).join(''));
  var sixDigitPrefix = parseInt(arr.slice(0, 6).join(''));

  if (twoDigitPrefix === 38 || twoDigitPrefix === 39) {
    return 'Diner\'s Club';
  } else if (twoDigitPrefix === 34 || twoDigitPrefix === 37) {
    return 'American Express';
  } else if (twoDigitPrefix === 41) {
    return 'Visa';
  } else if (fourDigitPrefix === 6011 || twoDigitPrefix === 65) {
    return 'Discover';
  } else if (fourDigitPrefix === 5018 || fourDigitPrefix === 5020 || fourDigitPrefix === 5038 || fourDigitPrefix === 6304) {
    return 'Maestro';
  } else if (fourDigitPrefix === 4903 || fourDigitPrefix === 4905 || fourDigitPrefix === 4911 || fourDigitPrefix === 4936 || fourDigitPrefix === 6333 || fourDigitPrefix === 6759 || sixDigitPrefix === 564182 || sixDigitPrefix === 633110) {
    return 'Switch';
  }

  for (var i = 51; i <= 55; i++) {
    if (twoDigitPrefix === i)
      return 'MasterCard';
  }
  for (var i = 644; i <= 649; i++) {
    if (threeDigitPrefix === i)
      return 'Discover';
  }
  for (var i = 624; i <= 626; i++) {
    if (threeDigitPrefix === i)
      return 'China UnionPay';
  }
  for (var i = 6282; i <= 6288; i++) {
    if (fourDigitPrefix === i)
      return 'China UnionPay';
  }
  for (var i = 622126; i <= 622925; i++) {
    if (sixDigitPrefix === i)
      return 'China UnionPay';
  }

};