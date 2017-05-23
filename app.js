'use strict';

var clickCounter = 0;

function ImageCreator(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
}


//
// imgArray[1].path

// function createObjects() {
  // var imgArray = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dogduck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/petsweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/watercan.jpg', 'img/wineglass.jpg'];
  //
  // for (i = 0; i < imgArray.length; i++) {
  //   var 'image' + i = new ImageCreator(imgArray[i].split('/')[1].split('.')[0], imgArray[i]);
  // }
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

var imagesArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];

//var imagesTracked = [];
function randomIndexGen() {
  var randIndex = Math.floor(Math.random() * imagesArray.length);
  var image = imagesArray[randIndex];
  return image;
}

function displayImages() {
  var imagePath = randomIndexGen().path;
  console.log(imagePath);
  var imageOne = document.getElementById('image1');
  console.log(imageOne);
  var elImage = document.createElement('img');
  //elImage.value = ('src', imagePath);
  elImage.setAttribute('src', imagePath);
  console.log(elImage);
  imageOne.innerHTML = elImage;
  //console.log(imageOne);
}

displayImages();


    // while (imagesTracked.indexOf(randIndex) {
      //while random image is not inside of images track
      //randomimage ++      var randIndex = Math.floor(Math.random() * imagesArray.length);

// imagesTracked.push(randPicture);
// function displayImages() {
//   var imageOne = document.getElementById('image1');
//   var imageTwo = document.getElementById('image2');
//   var imageThree = document.getElementById('image3');


//
// }
