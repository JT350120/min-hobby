import './style.css'

const dataBtn = document.querySelector("#dataBtn");
const galleryBtn = document.querySelector("#galleryBtn");
const historyBtn = document.querySelector("#historyBtn");

const contentDiv = document.querySelector("#content");

const picDiv = document.querySelector("#picDiv");
const textDiv = document.querySelector("#textDiv");

dataBtn.addEventListener("click", createDataDivs);
galleryBtn.addEventListener("click", createGalleryDivs);
historyBtn.addEventListener("click", createHistoryDivs);

function createStartPageContent() {
  picDiv.innerText = "Här kommer det en bild";
  textDiv.innerText = "Dynamiskt skapad text på startsidan";
}

function createDataContent() {
  contentDiv.textContent = 'data';
}

function createGalleryContent() {
  contentDiv.textContent = 'gallery';
}

function createHistoryContent() {
  contentDiv.textContent = 'history';
}

createStartPageContent();