window.addEventListener('load', start);

var rangeRed = document.querySelector('#rangeRed');
var rangeGreen = document.querySelector('#rangeGreen');
var rangeBlue = document.querySelector('#rangeBlue');
var inputRed = document.querySelector('#textRed');
var inputGreen = document.querySelector('#textGreen');
var inputBlue = document.querySelector('#textBlue');
var redValue = 0;
var greenValue = 0;
var blueValue = 0;
var gridColor = document.querySelector('#gridColor');

function start() {
  changeColor();
  rangeRed.addEventListener('input', redRangeChangeValue);
  rangeGreen.addEventListener('input', greenRangeChangeValue);
  rangeBlue.addEventListener('input', blueRangeChangeValue);
}

function redRangeChangeValue(event) {
  redValue = event.target.value;
  inputRed.value = redValue;

  changeColor();
}

function greenRangeChangeValue(event) {
  greenValue = event.target.value;
  inputGreen.value = greenValue;

  changeColor();
}

function blueRangeChangeValue(event) {
  blueValue = event.target.value;
  inputBlue.value = blueValue;

  changeColor();
}

function changeColor() {
  gridColor.style.backgroundColor =
    'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
}
