const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){}

ResultView.prototype.displayResult = function(isAPrime){
    const resultElement = document.querySelector('#result');
    if(isAPrime){
        resultElement.textContent = "Yes! It's a prime number.";
    } else{
        resultElement.textContent = "No! It is not a prime ye fool."
    }};

ResultView.prototype.bindEvents = function(){
    PubSub.subscribe('PrimeChecker:result-calculated',(event)=>{
        const isAPrime = event.detail;
        this.displayResult(isAPrime);
    });
};

module.exports = ResultView;