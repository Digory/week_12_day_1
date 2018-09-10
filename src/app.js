const NumberInputView = require('./views/number_input_view.js');
const PrimeChecker = require('./models/prime_checker.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const numberInputView = new NumberInputView();
  numberInputView.bindEvents();
  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();
  const resultView = new ResultView();
  resultView.bindEvents();
});
