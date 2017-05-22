'use strict';

var clickCounter = 0;

function ImageCreator(name, path,) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
  this.justShown = false;
}

function createObjects() {
  var bag = new ImageCreator('bag', './img/bag.jpg');
  var banana = new ImageCreator('banana', './img/banana.jpg');
  var bathroom = new ImageCreator('bathroom', './img/bathroom.jpg');
  var boots = new ImageCreator('boots', './img/boots.jpg');
  var breakfast = new ImageCreator('breakfast', './img/breakfast.jpg');
  var bubblegum = new ImageCreator('bubblegum', './img/bubblegum.jpg');
  var chair = new ImageCreator('chair', './img/chair.jpg');
  var cthulhu = new ImageCreator('cthulhu', './img/cthulhu.jpg');
  var dogduck = new ImageCreator('dogduck', './img/dogduck.jpg');
  var dragon = new ImageCreator('dragon', './img/dragon.jpg');
  var pen = new ImageCreator('pen', './img/pen.jpg');
  var petsweep = new ImageCreator('petsweep', './img/petsweep.jpg');
  var scissors = new ImageCreator('scissors', './img/scissors.jpg');
  var shark = new ImageCreator('shark', './img/shark.jpg');
  var sweep = new ImageCreator('sweep', './img/sweep.png');
  var tauntaun = new ImageCreator('tauntaun', './img/tauntaun.jpg');
  var unicorn = new ImageCreator('unicorn', './img/unicorn.jpg');
  var usb = new ImageCreator('usb', './img/usb.gif');
  var watercan = new ImageCreator('watercan', './img/watercan.jpg');
  var wineglass = new ImageCreator('wineglass', './img/wineglass.jpg');
  var imageNamesArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];
}





function displayImages() {
  var

}

function randomImage() {
  var
}
