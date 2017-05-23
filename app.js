'use strict';

// Declare variables
var clickCounter = 0;
var productArray = [];
var justShown = [];

// Constructor function, includes product name, file path, shown counter, clicked counter, and method to push created products to product array
function ImageCreator(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
  productArray.push(this);
}

// Use Constructor function to build the objects, adding each one to the product array
var bag = new ImageCreator('bag', './img/bag.jpg');
var banana = new ImageCreator('banana', './img/banana.jpg');
var bathroom = new ImageCreator('bathroom', './img/bathroom.jpg');
var boots = new ImageCreator('boots', './img/boots.jpg');
var breakfast = new ImageCreator('breakfast', './img/breakfast.jpg');
var chair = new ImageCreator('chair', './img/chair.jpg');
var bubblegum = new ImageCreator('bubblegum', './img/bubblegum.jpg');
var cthulhu = new ImageCreator('cthulhu', './img/cthulhu.jpg');
var dogduck = new ImageCreator('dogduck', './img/dogduck.jpg');
var dragon = new ImageCreator('dragon', './img/dragon.jpg');
var pen = new ImageCreator('pen', './img/pen.jpg');
var petsweep = new ImageCreator('petsweep', './img/petsweep.jpg');
var scissors = new ImageCreator('scissors', './img/scissors.jpg');
var shark = new ImageCreator('shark', './img/shark.jpg');
var sweep = new ImageCreator('sweep', './img/sweep.png');
var tauntaun = new ImageCreator('tauntaun', './img/tauntaun.jpg');
var usb = new ImageCreator('usb', './img/usb.gif');
var unicorn = new ImageCreator('unicorn', './img/unicorn.jpg');
var watercan = new ImageCreator('watercan', './img/watercan.jpg');
var wineglass = new ImageCreator('wineglass', './img/wineglass.jpg');

// function to generate a random product and return it by index ID
function randomProductGen() {
  var randIndex = Math.floor(Math.random() * productArray.length);
  return productArray[randIndex];
}
//console.log(randomProductGen());

// function to display 3 images to the DOM, looping through until the 2nd and 3rd images are not the same as the others
var elImageOne = document.getElementById('image1');
var elImageTwo = document.getElementById('image2');
var elImageThree = document.getElementById('image3');
var randImageOne, randImageTwo, randImageThree;

function displayImages() {
  //console.log(elImageOne);
  randImageOne = randomProductGen();
  //console.log(randImageOne);

  elImageOne.setAttribute('src', randImageOne.path);


  //console.log(elImageTwo);
  randImageTwo = randomProductGen();
  //console.log(randImageTwo);

  while (randImageOne === randImageTwo) {
    randImageTwo = randomProductGen();
  }

  elImageTwo.setAttribute('src', randImageTwo.path);


  //console.log(elImageThree);
  randImageThree = randomProductGen();
  //console.log(randImageThree);

  while (randImageThree === randImageOne || randImageThree === randImageTwo) {
    randImageThree = randomProductGen();
  }

  elImageThree.setAttribute('src', randImageThree.path);
}

displayImages();

// listens for a click on an image
elImageOne.addEventListener('click', function() {
  randImageOne.clicked += 1;
  clickCounter += 1;
  console.log('click counter: ' + clickCounter);
  displayImages();
});

elImageTwo.addEventListener('click', function() {
  randImageTwo.clicked += 1;
  clickCounter += 1;
  console.log('click counter: ' + clickCounter);
  displayImages();
});

elImageThree.addEventListener('click', function() {
  randImageThree.clicked += 1;
  clickCounter += 1;
  console.log('click counter: ' + clickCounter);
  displayImages();
});


  // console.log(bag.clicked);
  // console.log(banana.clicked);
  // console.log(bathroom.clicked);
  // console.log(boots.clicked);
  // console.log(breakfast.clicked);
