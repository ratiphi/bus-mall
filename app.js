'use strict';

// Declare variables
var clickCounter = 0;
var productArray = [];
var justShown = [];

Array.prototype.replace = function ( index, item ) {
  this.splice( index, 1, item );
};

// var arr = [ 'A', 'B', 'D'];
// arr.replace(2, 'C');
// => arr == [ 'A', 'B', 'C']

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
  //return [productArray[randIndex],randIndex];
  return [productArray[randIndex], randIndex];
}

// someArray.replace(2, 'C');
// function to display 3 images to the DOM, looping through until the 2nd and 3rd images are not the same as the others
var elImageOne = document.getElementById('image1');
var elImageTwo = document.getElementById('image2');
var elImageThree = document.getElementById('image3');
var randImageOne, randImageTwo, randImageThree;

// function displayImages() {
//   randImageOne = randomProductGen();
//   elImageOne.setAttribute('src', randImageOne.path);
//   justShown.replace(0,randImageOne);
//
//   randImageTwo = randomProductGen();
//   while (randImageOne === randImageTwo) {
//     randImageTwo = randomProductGen();
//   }
//   elImageTwo.setAttribute('src', randImageTwo.path);
//   justShown.replace(1,randImageTwo);
//
//   randImageThree = randomProductGen();
//   while (randImageThree === randImageOne || randImageThree === randImageTwo) {
//     randImageThree = randomProductGen();
//   }
//   elImageThree.setAttribute('src', randImageThree.path);
//   justShown.replace(2,randImageThree);
//   console.log(justShown);
// }

function displayImages() {
  randImageOne = randomProductGen();
  while (justShown.includes(randImageOne[1])) {
    console.log(randImageOne[1]);
    randImageOne = randomProductGen();
  }
  elImageOne.setAttribute('src', randImageOne[0].path);
  justShown.replace(0,randImageOne[1]);

  randImageTwo = randomProductGen();
  while (randImageTwo[1] === randImageOne[1] || justShown.includes(randImageTwo[1])) {
    console.log(randImageTwo[1]);
    randImageTwo = randomProductGen();
  }
  elImageTwo.setAttribute('src', randImageTwo[0].path);
  justShown.replace(1,randImageTwo[1]);

  randImageThree = randomProductGen();
  while (randImageThree[1] === randImageOne[1] || randImageThree[1] === randImageTwo[1] || justShown.includes(randImageThree[1])) {
    console.log(randImageThree[1]);
    randImageThree = randomProductGen();
  }
  elImageThree.setAttribute('src', randImageThree[0].path);
  justShown.replace(2,randImageThree[1]);

  console.log('just shown0: ' + justShown[0]);
  console.log('just shown1: ' + justShown[1]);
  console.log('just shown2: ' + justShown[2]);

}

displayImages();



// listens for a click on an image
elImageOne.addEventListener('click', function() {
  randImageOne[0].clicked += 1;
  clickCounter += 1;
  console.log('click counter: ' + clickCounter);
  displayImages();
});

elImageTwo.addEventListener('click', function() {
  randImageTwo[0].clicked += 1;
  clickCounter += 1;
  console.log('click counter: ' + clickCounter);
  displayImages();
});

elImageThree.addEventListener('click', function() {
  randImageThree[0].clicked += 1;
  clickCounter += 1;
  console.log('click counter: ' + clickCounter);
  displayImages();
});


//  builds a chart with a placeholder dataset until I get my bus mall functionality working.

var canvas = document.getElementById('chart');
var ctx = canvas.getContext('2d');

function placeholderDataArray() {
  return [5, 3, 7, 4, 6, 1, 3, 2, 4, 3, 6, 8, 2, 4, 3, 5, 7, 2, 7, 5];
}

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'chair', 'bubblegum', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'usb', 'unicorn', 'watercan', 'wineglass'],
    datasets: [{
      label: 'Number of Clicks Per Images',
      data: placeholderDataArray(),
      backgroundColor: ['#00B2E5', '#00D4E3', '#00E1CB', '#00DFA6', '#00DD82', '#00DB5E', '#00D93B', '#00D719', '#08D500', '#2AD300', '#4AD100', '#6ACF00', '#8ACD00', '#A8CB00', '#C6C900', '#C7A900', '#C58800', '#C36800', '#C14800', '#BF2900']
    }]
  },
  options: {}
});


//
// console.log(bag.clicked);
// console.log(banana.clicked);
// console.log(bathroom.clicked);
// console.log(boots.clicked);
// console.log(breakfast.clicked);
//
//
// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
//   this.legs = 4;
//   this.isAGoodDog = true;
// }
//
// Dog.prototype.says = function(bark) {
//   console.log(bark);
// };
//
// var parker = new Dog('Parker', 'English Shepherd');
// var demi = new Dog('Demi', 'Border Collie');
//
// parker.says('woof');
// demi.legs = 3;
