// Create variables targetting the relevant DOM elements here 👇

var homeButton = document.querySelector('.home-button');
var randomizeButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var userCoverButton = document.querySelector('.make-new-button')
var mainCover = document.querySelector('.main-cover');
var formSection = document.querySelector('.form-view');
var savedCoversPage = document.querySelector('.saved-view');
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover ;

// Add your event listeners here 👇
randomizeButton.addEventListener('click', randomizeCovers);
userCoverButton.addEventListener('click', userCoverPage);
viewSavedButton.addEventListener('click', viewSavedPage);
homeButton.addEventListener('click', goHome);
// Create your event handlers and other functions here 👇
function userCoverPage() {
mainCover.classList.add('hidden');
formSection.classList.remove('hidden');
randomizeButton.classList.add('hidden');
saveCoverButton.classList.add('hidden');
homeButton.classList.remove('hidden');
}

function viewSavedPage() {
  mainCover.classList.add('hidden');
  savedCoversPage.classList.remove('hidden');
  randomizeButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  formSection.classList.add('hidden');
}

function goHome(){
  mainCover.classList.remove('hidden');
  savedCoversPage.classList.add('hidden');
  randomizeButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  formSection.classList.add('hidden');
  saveCoverButton.classList.remove('hidden');
}


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomizeCovers() {

  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);

  mainCover.innerHTML = `<img class="cover-image" src="${currentCover.cover}">
  <h2 class="cover-title">${currentCover.title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png">
  `
}

randomizeCovers();
