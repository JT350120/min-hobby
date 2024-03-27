import './style.css'

const dataBtn = document.querySelector("#dataBtn");
const galleryBtn = document.querySelector("#galleryBtn");
const historyBtn = document.querySelector("#historyBtn");

const contentDiv = document.querySelector("#content");

dataBtn.addEventListener("click", createDataDivs);
galleryBtn.addEventListener("click", createGalleryDivs);
historyBtn.addEventListener("click", createHistoryDivs);

function createStartPageDivs() {
  const picDiv = document.createElement("div");
  const textDiv = document.createElement("div");
  picDiv.classList.add("content","contentHalf");
  textDiv.classList.add("content","contentHalf");
  picDiv.innerText = "Här kommer det en bild";
  textDiv.innerText = "Dynamiskt skapad text på startsidan";
  document.getElementById("content").append(picDiv, textDiv);
}

function createDataDivs() {
  contentDiv.textContent = 'data';
}

function createGalleryDivs() {
  contentDiv.textContent = 'gallery';
}

function createHistoryDivs() {
  contentDiv.textContent = 'history';
}

createStartPageDivs();