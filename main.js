import './style.css'

const dataBtn = document.querySelector("#dataBtn");
const galleryBtn = document.querySelector("#galleryBtn");
const historyBtn = document.querySelector("#historyBtn");

const contentDiv = document.querySelector("#content");

dataBtn.addEventListener("click", createDataDiv);
galleryBtn.addEventListener("click", createGalleryDiv);
historyBtn.addEventListener("click", createHistoryDiv);
homeBtn.addEventListener("click", createStartPageContent);

function createDataDiv() {
  contentDiv.textContent = 'data';
}

function createGalleryDiv() {
  contentDiv.textContent = 'gallery';
}

function createHistoryDiv() {
  contentDiv.textContent = 'history';
}