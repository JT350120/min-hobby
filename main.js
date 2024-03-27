import './style.css'

const dataBtn = document.querySelector("#dataBtn");
const galleryBtn = document.querySelector("#galleryBtn");
const historyBtn = document.querySelector("#historyBtn");

const contentDiv = document.querySelector("#content");

const picDiv = document.querySelector("#picDiv");
const textDiv = document.querySelector("#textDiv");

dataBtn.addEventListener("click", createDataContent);
galleryBtn.addEventListener("click", createGalleryContent);
historyBtn.addEventListener("click", createHistoryContent);

function createStartPageContent() {
  picDiv.textContent = "Här kommer det en bild";
  textDiv.textContent = "Dynamiskt skapad text på startsidan";
}

function createDataContent() {
  picDiv.textContent = "Här kommer det en bild";
  textDiv.textContent = "";
  const dataListElement = document.createElement("ul");

  const dataList = [
    "Motor: 2-cylindrig, Rotax 440", 
    "Växellåda: Ibland",
    "Toppfart: Vet inte, hastighetsmätaren är trasig",
    "Bromsar: Trasiga, sätt hälarna i snön",
    "Stoppad sittdyna: Ja",
    "Extrautrustning: Trasigt signalhorn"
  ]

  dataList.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    dataListElement.appendChild(listItem);
  })

  textDiv.appendChild(dataListElement);
}

function createGalleryContent() {
  contentDiv.textContent = 'gallery';
}

function createHistoryContent() {
  contentDiv.textContent = 'history';
}

createStartPageContent();