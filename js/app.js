'use strict';

// Declare variables
var totalClickCounter = 0;
var productArray = [];
var shownImages = [];

if (localStorage.clicksArray) {
  var clicksArray = localStorage.clicksArray.split(',');
} else {
  // otherwise, create an empty array.
  var clicksArray = [];
}


// this function loads the localStorage list (if it exists) into the tasks list
// function loadArray() {
//   // if localStorage list does exists already
//   if (localStorage.list) {
//     // temp variable to hole list items
//     var item;
//     // loop through the
//     for (var x = 0; x < list.length; x++) {
//       // set temp variable equal to <li></li> element
//       item = document.createElement('li');
//       // insert list array item into <li></li> element
//       item.appendChild(document.createTextNode(list[x]));
//       // add the <li></li> element (with the list item inserted) to the task list
//       tasks.appendChild(item);
//     }
//   }
// }
//
// loadArray();

function ImageCreator(name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.views = 0;
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
  while (true) {
    var randIndex = Math.floor(Math.random() * productArray.length);
    if (shownImages.includes(productArray[randIndex]) === false) {
      return productArray[randIndex];
    }
  }
}


// function to generate 3 images and check if they were just used
function displayImages() {
  var threeImages = document.getElementsByClassName('randImage');
  var justUsed = [];
  for (var i = 0; i < 3; i++) {
    var varImage = randomProductGen();
    varImage.views += 1;
    threeImages[i].setAttribute('src', varImage.path);
    justUsed.push(varImage);
  }
  shownImages = justUsed;
}

// function displayImages() {
//   var threeImages = document.getElementsByClassName('randImage');
//   var justUsed = [];
//   for (var i = 0; i < 3; i++) {
//     var varImage = randomProductGen();
//     varImage.views += 1;
//     threeImages[i].setAttribute('src', varImage.path);
//     justUsed.push(varImage);
//   }
//   shownImages = justUsed;
// }


//
function onClick () {

  for (var i = 0; i < shownImages.length; i++) {
    if (this.getAttribute('src') === shownImages[i].path) {
      shownImages[i].clicks += 1;
      totalClickCounter += 1;
      displayImages();
    }
  }
  end();
}

function end() {
  if (totalClickCounter >= 25) {
    var allPics = document.getElementsByClassName('randImage');
    for (var i = 0; i < allPics.length; i++) {
      allPics[i].removeEventListener('click', onClick);
    }
    buildChart();
  }
}
// function to
function eventHandler() {
  var threeImages = document.getElementsByClassName('randImage');
  for (var i = 0; i < 3; i++) {
    threeImages[i].addEventListener('click', onClick);
  }
}

// function builds an array with all of the click counters
function buildClicksArray() {
  for (var i = 0; i < productArray.length; i++) {
    clicksArray.push(productArray[i].clicks);
  }
  localStorage.clicksArray = clicksArray;
  //return clicksArray;
}

// function save() {
//   localStorage.clicksArray = clicksArray;
// }


displayImages();
eventHandler();
// save();



// function that builds a bar chart using click counter array for data
function buildChart() {
  buildClicksArray();
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'chair', 'bubblegum', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'usb', 'unicorn', 'watercan', 'wineglass'],
      datasets: [{
        label: 'Number of Clicks Per Images',
        data: clicksArray,
        backgroundColor: ['#00B2E5', '#00D4E3', '#00E1CB', '#00DFA6', '#00DD82', '#00DB5E', '#00D93B', '#00D719', '#08D500', '#2AD300', '#4AD100', '#6ACF00', '#8ACD00', '#A8CB00', '#C6C900', '#C7A900', '#C58800', '#C36800', '#C14800', '#BF2900']
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}



// // function to log click counters on button click
// function logImages() {
//   console.log('total clicks: ' + totalClickCounter);
//   console.log('bag: ' + bag.clicks);
//   console.log('banana: ' + banana.clicks);
//   console.log('bathroom: ' + bathroom.clicks);
//   console.log('boots: ' + boots.clicks);
//   console.log('breakfast: ' + breakfast.clicks);
//   console.log('chair: ' + chair.clicks);
//   console.log('bubblegum: ' + bubblegum .clicks);
//   console.log('cthulhu: ' + cthulhu.clicks);
//   console.log('dogduck: ' + dogduck.clicks);
//   console.log('dragon: ' + dragon.clicks);
//   console.log('pen: ' + pen.clicks);
//   console.log('petsweep: ' + petsweep.clicks);
//   console.log('scissors: ' + scissors.clicks);
//   console.log('shark: ' + shark.clicks);
//   console.log('sweep: ' + sweep.clicks);
//   console.log('tauntaun: ' + tauntaun.clicks);
//   console.log('usb: ' + usb.clicks);
//   console.log('unicorn: ' + unicorn.clicks);
//   console.log('watercan: ' + watercan.clicks);
//   console.log('wineglass: ' + wineglass.clicks);
// }
//
// logButton.addEventListener('click', logImages);








// Array.prototype.replace = function ( index, item ) {
//   this.splice( index, 1, item );
// };

// var arr = [ 'A', 'B', 'D'];
// arr.replace(2, 'C');
// => arr == [ 'A', 'B', 'C']

// Constructor function, includes product name, file path, shown counter, clicked counter, and method to push created products to product array

// someArray.replace(2, 'C');
// function to display 3 images to the DOM, looping through until the 2nd and 3rd images are not the same as the others

  // randImageOne = randomProductGen();
  // while (justShown.includes(randImageOne[1])) {
  //   console.log(randImageOne[1]);
  //   randImageOne = randomProductGen();
  // }
  // elImageOne.setAttribute('src', randImageOne[0].path);
  // justShown.replace(0,randImageOne[1]);
  //
  // randImageTwo = randomProductGen();
  // while (randImageTwo[1] === randImageOne[1] || justShown.includes(randImageTwo[1])) {
  //   console.log(randImageTwo[1]);
  //   randImageTwo = randomProductGen();
  // }
  // elImageTwo.setAttribute('src', randImageTwo[0].path);
  // justShown.replace(1,randImageTwo[1]);
  //
  // randImageThree = randomProductGen();
  // while (randImageThree[1] === randImageOne[1] || randImageThree[1] === randImageTwo[1] || justShown.includes(randImageThree[1])) {
  //   console.log(randImageThree[1]);
  //   randImageThree = randomProductGen();
  // }
  // elImageThree.setAttribute('src', randImageThree[0].path);
  // justShown.replace(2,randImageThree[1]);
  //
  // console.log('just shown0: ' + justShown[0]);
  // console.log('just shown1: ' + justShown[1]);
  // console.log('just shown2: ' + justShown[2]);


// listens for a click on an image
// elImageOne.addEventListener('click', function() {
//   randImageOne[0].clicked += 1;
//   clickCounter += 1;
//   console.log('click counter: ' + clickCounter);
//   displayImages();
// });
//
// elImageTwo.addEventListener('click', function() {
//   randImageTwo[0].clicked += 1;
//   clickCounter += 1;
//   console.log('click counter: ' + clickCounter);
//   displayImages();
// });
//
// elImageThree.addEventListener('click', function() {
//   randImageThree[0].clicked += 1;
//   clickCounter += 1;
//   console.log('click counter: ' + clickCounter);
//   displayImages();
// });


//  builds a chart with a placeholder dataset until I get my bus mall functionality working.



// if (user.hasFinishedChart = true) {
//
// }


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
